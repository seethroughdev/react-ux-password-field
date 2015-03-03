// waiting for jest to work with node 0.12
// https://github.com/facebook/jest/issues/243

jest.dontMock('../lib/react-ux-password-field');

var React = require('react/addons');
var Util = React.addons.TestUtils;
var InputPassword = require('../lib/react-ux-password-field');

describe("component", function() {
  it('displays the input field', function() {

    var component = Util.renderIntoDocument(
      <InputPassword id="password1" />
    );

    var input = Util.findRenderedDOMComponentWithTag(component, 'input');

    Util.Simulate.change(input, {target: {value: 'On'}});

    expect(input.getDOMNode().textContent).toEqual('On');
  });
});
