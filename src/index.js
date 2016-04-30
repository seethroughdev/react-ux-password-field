'use strict';

var React = require('react'),
    RP    = React.PropTypes,
    config = require('./js/config'),
    debounce = require('lodash.debounce');

var InputPassword = React.createClass({


  /*==========  VALIDATE  ==========*/

  propTypes: {
    infoBar: RP.bool,
    statusColor: RP.string,
    statusInactiveColor: RP.string,
    minScore: RP.number,
    changeCb: RP.func,
    toggleMask: RP.bool,
    unMaskTime: RP.number,
    minLength: RP.number,
    strengthLang:RP.array,
    id: RP.string,
  },


  /*==========  DEFAULTS  ==========*/

  getDefaultProps() {
    return {
      infoBar: true,
      statusColor: config.statusColor,
      statusInactiveColor: config.statusInactiveColor,
      zxcvbn: config.zxcvbnSrc,
      minScore: 0,
      toggleMask: true,
      unMaskTime: config.unMaskTime,
      strengthLang: config.strengthLang,
      id: 'input'
    }
  },

  getInitialState() {
    return {
      value: '',
      score: 0,
      entropy: 0,
      isPassword: true,
      isValid: false
    }
  },


  /*==========  STYLES  ==========*/

  getMeterStyle(score) {
    var width = this.state.value === '' ? 0 : 24 * score + 4;
    return {
      width: this.props.zxcvbn ? width + '%' : '100%',
      maxWidth: '85%',
      opacity: this.props.zxcvbn ? width * .01 + .5 : '1',
      background: this.state.isValid ?  this.props.statusColor : this.props.statusInactiveColor,
      height: 5,
      transition: 'all 400ms linear',
      display: 'inline-block',
      marginRight: '1%'
    }
  },

  unMaskStyle: {
    color: config.unMaskColor,
    fontWeight: 200
  },

  infoStyle: {
    position: 'absolute',
    bottom: -10,
    width: '100%',
    overflow: 'hidden',
    height: 24
  },

  iconStyle: {
    display: 'inline-block',
    opacity: .25,
    position: 'relative',
    top: 2,
    width: '3%'
  },

  strengthLangStyle: {
    fontSize: 12,
    position: 'relative',
    top: 2,
  },


  /*==========  METHODS  ==========*/

  addPasswordType() {
    this.setState({
      isPassword: true
    });
  },

  /*==========  HANDLERS  ==========*/

  handleInputType() {
    this.setState({
      isPassword: !this.state.isPassword
    });
  },

  handleChange(e) {
    e.preventDefault();

    var native_target = e.nativeEvent.target;
    var val = e.target.value;
    var score;

    this.setState({
      value: val,
      isValid: e.target.validity.valid,
      selectionStart : native_target.selectionStart,
      selectionEnd : native_target.selectionEnd,
    });

    if (this.props.toggleMask) {
      this.handleToggleMask();
    }

    if (this.props.zxcvbn) {
      score = this.handleZxcvbn(val);
    } else {
      score = this.state.score;
    }

    // call onChange prop passed from parent
    if (this.props.onChange) {
      this.props.onChange(val, this.state.isValid, score);
    }

    if (this.props.minLength) {
      this.handleMinLength(e.target.value.length)
    }
  },

  handleToggleMask() {

    // display password, then
    this.setState({
      isPassword: false
    });

    // debounce remasking password
    this.maskPassword();
  },

  handleZxcvbn(val) {

    if (typeof zxcvbn === 'undefined' && typeof window.zxcvbn === 'undefined') {
      return;
    }

    var stats        = zxcvbn(val),
        currentScore = stats.score;

    this.setState({
      score: currentScore,
      entropy: stats.entropy
    });

    if (currentScore < this.props.minScore) {
      this.setState({
        isValid: false
      });
    }

    // if score changed and callback provided
    if (this.props.changeCb && this.state.score !== currentScore) {
      this.props.changeCb(this.state.score, currentScore, val)
    }

    if (this.props.zxcvbn === 'debug') {
      console.debug(stats);
    }

    return currentScore;
  },

  handleMinLength(len) {
    if (len <= this.props.minLength) {
      this.setState({
        isValid: false
      })
    }
  },

  componentWillMount() {
    var zxcvbnSrc;

    // Load zxcvbn async if its enabled and doesn't already exist
    if (this.props.zxcvbn && typeof zxcvbn === 'undefined') {

      zxcvbnSrc = this.props.zxcvbn !== 'debug' ? this.props.zxcvbn : config.zxcvbnSrc;

    // snippet to async load zxcvbn if enabled
    (function(){var a;a=function(){var a,b;b=document.createElement("script");b.src=zxcvbnSrc;b.type="text/javascript";b.async=!0;a=document.getElementsByTagName("head")[0];return a.parentNode.insertBefore(b,a)};null!=window.attachEvent?window.attachEvent("onload",a):window.addEventListener("load",a,!1)}).call(this);
    }

    // set debouncer for password
    if (this.props.toggleMask) {
      this.maskPassword = debounce(this.addPasswordType, this.props.unMaskTime);
    }
  },

  componentWillUnmount() {
    // cancel the debouncer when component is not used anymore. This to avoid
    // setting the state  unnecessarily, see issue #24
    if (this.maskPassword) {
      this.maskPassword.cancel()
    }
  },

  render() {
    var infoBar;

    if (this.props.infoBar) {
      infoBar = <div className="passwordField__info" style={this.infoStyle}>
        <span style={this.iconStyle} className="passwordField__icon">
        <img src={require('./img/lock.png')} height="10" width="10"  />
        </span>
        <span style={this.getMeterStyle(this.state.score)} className="passwordField__meter" />
        <span style={this.strengthLangStyle} className="passwordField__strength">
          {this.props.zxcvbn &&
            this.state.value.length > 0 &&
            this.props.strengthLang.length > 0 ?
              this.props.strengthLang[this.state.score] : null}
        </span>
      </div>
    }

    // allow onChange to be passed from parent and not override default prop
    var {onChange, ...props} = this.props;

    // overcome problem with firefox resetting the input selection point
    var that = this;
    if (typeof navigator !== 'undefined') {
      setTimeout(function() {
        if (!/Firefox/.test(navigator.userAgent)) return;
        var elem = that.refs[that.props.id].getDOMNode();
        elem.selectionStart = that.state.selectionStart;
        elem.selectionEnd = that.state.selectionEnd;
      }, 1);
    }

    return (
      <div
        style={{position: 'relative', display: 'inline-block'}}
        className="passwordField"
        data-valid={this.state.isValid}
        data-score={this.state.score}
        data-entropy={this.state.entropy}
        >
        <input
          ref={this.props.id}
          className="passwordField__input"
          type={this.state.isPassword ? 'password' : 'text'}
          value={this.state.value}
          style={this.state.isPassword ? null : this.unMaskStyle}
          onChange={this.handleChange}
          {...props}
        />
        {infoBar}
      </div>
    );
  }
});

module.exports = InputPassword;
