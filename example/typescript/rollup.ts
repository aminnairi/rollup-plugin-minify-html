'use strict';

import { resolve } from 'path';
import { rollup, InputOptions, RollupBuild, OutputOptions } from 'rollup';
import { minifyHtml, MinifyHtmlOptions, File, HtmlMinifierOptions } from 'rollup-plugin-minify-html';

async function build() {
    const files: File[] = [{
        from: resolve('src', 'index.html'),
        to: resolve('dist', 'index.html')
    }];

    const htmlMinifierOptions: HtmlMinifierOptions = {
        collapseWhitespace: true
    };

    const minifyHtmlOptions: MinifyHtmlOptions = { files, htmlMinifierOptions };

    const inputOptions: InputOptions = {
        input: resolve('src', 'index.ts'),
        plugins: [
            minifyHtml(minifyHtmlOptions)
        ]
    };

    const outputOptions: OutputOptions = {
        file: resolve('dist', 'index.js'),
        format: 'iife'
    };

    const bundle: RollupBuild = await rollup(inputOptions);

    await bundle.write(outputOptions);
}

build();