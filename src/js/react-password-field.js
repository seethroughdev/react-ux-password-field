'use strict';

var React = require('react'),
    RP    = React.PropTypes,
    config = require('./config'),
    debounce = require('lodash.debounce');


var InputPassword = React.createClass({


  /*==========  VALIDATE  ==========*/

  propTypes: {
    statusColor: RP.string,
    statusInactiveColor: RP.string,
    minScore: RP.number,
    changeCb: RP.func,
    toggleMask: RP.bool,
    match: RP.string
  },


  /*==========  DEFAULTS  ==========*/

  getDefaultProps() {
    return {
      statusColor: config.statusColor,
      statusInactiveColor: config.statusInactiveColor,
      zxcvbn: config.zxcvbnSrc,
      minScore: 0,
      toggleMask: true,
      match: null
    }
  },

  getInitialState() {
    return {
      value: '',
      score: 0,
      entropy: 0,
      isPassword: true
    }
  },


  /*==========  STYLES  ==========*/

  getMeterStyle(score) {
    var width = 24 * score + 4;
    return {
      width: this.props.zxcvbn ? width + '%' : '100%',
      maxWidth: '96%',
      opacity: this.props.zxcvbn ? width * .01 + .25 : '1',
      background: this.state.isValid ?  this.props.statusColor : this.props.statusInactiveColor,
      height: 5,
      transition: 'all 400ms linear',
      display: 'inline-block'
    }
  },

  unMaskStyle: {
    color: config.unMaskColor,
    fontStyle: 'italic',
    fontWeight: 200
  },

  infoStyle: {
    position: 'absolute',
    bottom: -15,
    width: '100%'
  },

  iconStyle: {
    display: 'inline-block',
    opacity: .25,
    position: 'relative',
    top: 2,
    width: '4%'
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
    var val = e.target.value;

    this.setState({
      value: val,
      isValid: e.target.validity.valid
    });


    if (this.props.toggleMask) {
      this.handleToggleMask();
    }

    if (this.props.zxcvbn && !this.props.match) {
      this.handleZxcvbn(val);
    }

    if (this.props.match) {
      var el = document.getElementById(this.props.match);
      if (el && typeof el !== 'undefined') {
        this.handleMatch(val, el.value);
      } else {
        throw new Error('The elementId you want to match does not exist!');
      }
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
      this.props.changeCb(this.state.score, currentScore)
    }

    if (this.props.zxcvbn === 'debug') {
      console.debug(stats);
    }
  },

  handleMatch(currentValue, matchedValue) {
    if (currentValue === matchedValue) {
      console.log('it matches');
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
      this.maskPassword = debounce(this.addPasswordType, config.unMaskTime);
    }
  },

  render() {

    return (
      <div
        style={{position: 'relative', display: 'inline-block'}}
        className="passwordField"
        data-valid={this.state.isValid}
        data-score={this.state.score}
        data-entropy={this.state.entropy}
        >
        <input
          ref="passwordInput"
          className="passwordField__input"
          type={this.state.isPassword ? 'password' : 'text'}
          value={this.state.value}
          style={this.state.isPassword ? null : this.unMaskStyle}
          onChange={this.handleChange}
          {...this.props}
        />
        <div className="passwordField__info" style={this.infoStyle}>
          <span style={this.iconStyle} className="passwordField__icon">
          <img src={require('../img/lock.png')} height="10" width="10"  />
          </span>
          <span style={this.getMeterStyle(this.state.score)} className="passwordField__meter" />
        </div>
      </div>
    );
  }
});

module.exports = InputPassword;
