# rollup-plugin-minify-html

## Installation

```console
$ npm install rollup-plugin-minify-html
```

## Usage

```javascript
import { minifyHtml } from 'rollup-plugin-minify-html';
```

## Parameters

### Files

An array of objects. Eeach object defines the HTML file to minify and the minified HTML file's output path.

```javascript
minifyHtml({
    files: [{
        from: 'src/index.html',
        to: 'dist/index.html'
    }]
})
```

### Options

An object defining the options for the HTML minification. See [`html-minifier`][html-minifier] for more informations.

```javascript
minifyHtml({
    htmlMinifierOptions: {
        collapseWhitespace: true
    }
})
```

## Examples

See the [`example`][example] folder.

[html-minifier]: https://github.com/kangax/html-minifier
[example]: ./example