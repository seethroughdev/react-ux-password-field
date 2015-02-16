'use strict';

var React         = require('react'),
    InputPassword = require('../src/js/react-password-field');

require('normalize.css/normalize.css')
require('./style.scss');

React.render(

  <form>
    <fieldset>
      <label for="password1">Your Password</label>
      <InputPassword name="password1" minScore={2} />
    </fieldset>
  </form>
, document.getElementById('content'));
