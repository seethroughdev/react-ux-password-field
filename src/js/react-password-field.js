'use strict';

var React = require('react'),
    RP    = React.PropTypes,
    debounce = require('lodash.debounce');

var InputPassword = React.createClass({

  getDefaultProps() {
    return {
      statusColor: '#00ff00',
      statusInactiveColor: '#ff0000',
      minScore: 0
    }
  },

  propTypes: {
    debug: RP.bool,
    statusColor: RP.string,
    minScore: RP.number,
    changeCb: RP.func,
  },

  getInitialState() {
    return {
      value: '',
      score: 0,
      entropy: 0,
      isPassword: true
    }
  },

  getMeterStyle(score) {
    var width = 24 * score + 4;
    return {
      width: width + '%',
      opacity: width * .01 + .25,
      background: score < this.props.minScore ?  this.props.statusInactiveColor : this.props.statusColor,
      position: 'absolute',
      bottom: -10,
      height: 5,
      transition: 'all 400ms linear'
    }
  },

  handleInputType() {
    this.setState({
      isPassword: !this.state.isPassword
    });
  },

  addPasswordType() {
    this.setState({
      isPassword: true
    });
  },

  handleChange(e) {
    e.preventDefault();
    var val          = e.target.value,
        stats        = zxcvbn(val),
        currentScore = stats.score,
        hidePassword = debounce(this.addPasswordType, 2000);

    // if score changed and callback provided
    if (this.props.changeCb && this.state.score !== currentScore) {
      this.props.changeCb(this.state.score, currentScore)
    }

    this.setState({
      value: val,
      score: currentScore,
      entropy: stats.entropy,
      isPassword: false
    });

    hidePassword();

    if (this.props.debug) {
      console.log(stats);
    }
  },

  componentWillMount() {

    // Load zxcvbn async if doesn't already exist

    if (typeof zxcvbn !== 'undefined') return;
    (function(){var a;a=function(){var a,b;b=document.createElement("script");b.src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/1.0/zxcvbn.min.js";b.type="text/javascript";b.async=!0;a=document.getElementsByTagName("head")[0];return a.parentNode.insertBefore(b,a)};null!=window.attachEvent?window.attachEvent("onload",a):window.addEventListener("load",a,!1)}).call(this);
  },

  render() {

    var meterStyle     = this.getMeterStyle(this.state.score),
        containerStyle = {
          position: 'relative'
        },
        viewPasswordStyle = {
          position: 'absolute',
          color: '#c7c7c7',
          fontSize: 22,
          top: 5,
          right: 5
        };

    // the props list are long because we are including default html5 attributes
    // that could be passed down through parent

    return (
      <div
        style={containerStyle}
        className="passwordField"
        data-score={this.state.score}
        data-entropy={this.state.entropy}
        >
        <div className="passwordField__toggleVisibility"
            onMouseEnter={this.handleInputType}
            onMouseLeave={this.handleInputType}
            style={viewPasswordStyle}
            >+
        </div>
        <input
          style={{width: '100%'}}
          className="passwordField__input"
          type={this.state.isPassword ? 'password' : 'text'}
          value={this.state.value}
          style={this.state.isPassword ? null : inputStyle}
          onChange={this.handleChange}
          {...this.props}
        />
        <div
          style={meterStyle}
          className="passwordField__meter">
        </div>
      </div>
    );
  }
});

module.exports = InputPassword;
