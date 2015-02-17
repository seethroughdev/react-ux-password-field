'use strict';

var React         = require('react'),
    InputPassword = require('../src/js/react-password-field');

require('normalize.css/normalize.css')
require('./style.scss');

React.render(
  <form>
    <fieldset>
      <label for="password1">Password</label>
      <InputPassword
        id="password1"
        name="password1"
        minScore={0}
        toggleMask={false}
        zxcvbn={false}
        pattern="[A-Za-z]+"
        required
      />
    </fieldset>
  </form>
, document.getElementById('content'));
