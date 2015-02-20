React UX Password Field
=============

This react component aims to improve common issues in password field UX.

1.  **Password Strength Detection** - Using Dropbox's [zxcvbn](https://blogs.dropbox.com/tech/2012/04/zxcvbn-realistic-password-strength-estimation/) library in real-time, onChange.
2.  **Timed Password Masking** - Best explained in the [nngroup](http://www.nngroup.com/articles/stop-password-masking/) article: [Stop Password Masking](http://www.nngroup.com/articles/stop-password-masking/)
3.  **Stateful Class** - Know the HTML5 validity of your field by class.

* * *

### Install

    <pre>
      `npm install react-ux-password-field`
    </pre>

View it on [Github](https://github.com/seethroughtrees/react-ux-password-field)

* * *

### Use

``` javascript
// use it like any other react component.
// just require and place it inside your render function.

var InputPassword = require('react-ux-password-field');

...

render: function() {
  return (
    &lt;InputPassword />
  )
}
```

* * *

### Options (props)

Add your attributes normally like you would any input field. (id, placeholder, required, pattern etc...) But now you get the following extras:

* * *

#### Info Bar

infoBar *(bool)* **default: true**

```infoBar={false}``` will disable the visible meter below the field.

You can still rely on the attributes in the container class to do any other logic including.

-   **data-valid** - current valid state of the field.
-   **data-score** - current password strength score.
-   **data-entropy** - current password entropy.



