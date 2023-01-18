# Highlight.js Lang

This repository contains a language grammar for Minecraft's `.lang` files for [highlight.js][hljs-website].

## Basic Usage

### Web Browser

First, include the main library as a script. Then, link this grammar. Be sure to also include a [theme][hljs-themes].

```html
<link rel="stylesheet" href="/path/to/styles/default.min.css">
<script src="/path/to/highlight.min.js"></script>
<script src="/path/to/lang.min.js">
<script>hljs.highlightAll();</script>
```

This will find and highlight code inside of `<pre><code>` tags; it tries
to detect the language automatically. If automatic detection doesn’t
work for you, or you simply prefer to be explicit, you can specify the language manually in the using the `class` attribute:

```html
<pre><code class="language-lang">...</code></pre>
```

### Node.js on the Server

The bare minimum to auto-detect the language and highlight some code.

```js
// load the library and ALL languages
hljs = require('highlight.js');
html = hljs.highlightAuto('gameTip.findTree=Punch a tree to gather wood.').value
```

To highlight code with a specific language, use `highlight`:

```js
html = hljs.highlight('gameTip.findTree=Punch a tree to gather wood.\n...', {language: 'lang'}).value
```

> **Note**: Because lang can be so generic at times, it is recommended to not rely on autodetection and instaed use `highlight` and specify the language.

See [Importing the Library](https://github.com/highlightjs/highlight.js#importing-the-library) for more examples of `require` vs `import` usage, etc.  For more information about the result object returned by `highlight` or `highlightAuto` refer to the [api docs](https://highlightjs.readthedocs.io/en/latest/api.html).

[hljs-website]: https://highlightjs.org/
[hljs-themes]: https://highlightjs.org/static/demo/
