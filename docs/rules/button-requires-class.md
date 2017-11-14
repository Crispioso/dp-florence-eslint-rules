# All uses on &lt;button&gt; must have the class &#34;btn&#34; (button-requires-class)

Button elements have been created without the default 'btn' class on them which means they inherit the browser styling. This can cause breaking styling changes without it being detected.


## Rule details

This rule aims to prevent any buttons being used without our default styling - by enforcing that the class 'btn' is always added to a button element.

Examples of **incorrect** code for this rule:

```js

<button></button>
<button className="unique-button-class"></button>
<button className="btn--primary"></button>

```

Examples of **correct** code for this rule:

```js

<button className="btn"></button>
<button className="btn btn--primary"></button>

```

## When not to use it

If we're using a button where it's got unique styling which isn't repeated anywhere else - meaning there's not benefit in using a `btn btn--modifier` syntax.