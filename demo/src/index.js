'use strict';

// default css
require('normalize.css/normalize.css')
require('./vendor/skeleton.css');
require('./vendor/github.css');

// syntax highlighting
require('./vendor/syntax.css');
require('./vendor/rainbow-custom.min.js');

// custom css
require('./css/style.scss');

console.log('aaa')

/*==========  APP  ==========*/

var React         = require('react'),
    InputPassword = require('../../lib/react-ux-password-field.js');

React.render(
  <form>
    <fieldset>
      <label htmlFor="password1">Passwordssss</label>
      <InputPassword
        id="password1"
        name="password1"
        placeholder="Try me out!  Enter a random password."
        minScore={2}
        minLength={5}
      />
    </fieldset>
  </form>
, document.getElementById('content'));
