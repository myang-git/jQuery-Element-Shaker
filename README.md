Requirement
=========================
jQuery Library

Install
=========================
Download the file jquery-element-shaker.js to the location your web app reads javascripts from

How To Use
=========================

Shaking a div for 500 ms with max drift of 10 pixels:

First create a div in the html:
```html
<div id='shaking_div'>Shaking Shaking</div>
```

Then in the javascript:

```html
$('#shaking_div').shake({dur: 500, drift: 10});</code>
```

Same approach can be applied to other types of element as well.

Enjoy!