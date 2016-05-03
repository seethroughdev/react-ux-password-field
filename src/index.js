'use strict';

// demo pages css
require('normalize.css/normalize.css')
require('./vendor/skeleton.css');
require('./vendor/github.css');
require('./vendor/syntax.css');
require('./vendor/rainbow-custom.min.js');
require('./css/style.scss');

// css for form field
require('./css/demo.scss');


/*==========  APP  ==========*/

const React         = require('react'),
    InputPassword = require('../../lib/react-ux-password-field.js');

React.render(
  <form>
    <fieldset>
      <label htmlFor="password1">Password</label>
      <InputPassword
        id="password1"
        name="password1"
        placeholder="Try me out!  Enter a random password."
        minScore={1}
        minLength={5}
        zxcvbn="debug"
      />
    </fieldset>
  </form>
, document.getElementById('content'));
