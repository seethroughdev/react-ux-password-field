'use strict';

var React = require('react'),
    RP    = React.PropTypes;

var InputPassword = React.createClass({

  getDefaultProps() {
    return {
      statusColor: '#00ff00',
      minScore: 0
    }
  },

  propTypes: {
    debug: RP.bool,
    statusColor: RP.string,
    placeholder: RP.string,
    changeCb: RP.func,
    minScore: RP.number,
    name: RP.string,
    form: RP.string,
    maxLength: RP.string,
    readonly: RP.string,
    size: RP.string,
    autofocus: RP.oneOf(['autofocus', '']),
    autocomplete: RP.oneOf(['on', 'off']),
    required: RP.oneOf(['required', '']),
    disabled: RP.oneOf(['disabled', ''])
  },

  getInitialState() {
    return {
      value: '',
      score: 0,
      entropy: 0,
      isPassword: true
    }
  },

  getScoreStyle(score) {
    var width = 24 * score + 4;
    return {
      width: width + '%',
      opacity: width * .01 + .25,
      background: score < this.props.minScore ? '#c7c7c7' : this.props.statusColor,
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

  handleChange(e) {
    e.preventDefault();
    var val          = e.target.value,
        stats        = zxcvbn(val),
        currentScore = stats.score;

    // if score changed and callback provided
    if (this.props.changeCb && this.state.score !== currentScore) {
      this.props.changeCb(this.state.score, currentScore)
    }

    this.setState({
      value: val,
      score: currentScore,
      entropy: stats.entropy
    })

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

    var scoreStyle     = this.getScoreStyle(this.state.score),
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
        id="passwordField"
        data-score={this.state.score}
        data-entropy={this.state.entropy}
        >
        <div id="viewPassword"
            onMouseEnter={this.handleInputType}
            onMouseLeave={this.handleInputType}
            style={viewPasswordStyle}
            >+</div>
        <input
          style={{width: '100%'}}
          ref='passwordInputValue'
          placeholder={this.props.placeholder}
          type={this.state.isPassword ? 'password' : 'text'}
          Score={this.state.score}
          value={this.state.value}
          onChange={this.handleChange}
          name={this.props.name}
          maxLength={this.props.maxLength}
          readonly={this.props.readonly}
          size={this.props.size}
          autofocus={this.props.autofocus}
          required={this.props.required}
          autocomplete={this.props.autocomplete}
          disabled={this.props.disabled}
        />
        <div style={scoreStyle} id="passwordMeter"></div>
      </div>
    );
  }
});

module.exports = InputPassword;
