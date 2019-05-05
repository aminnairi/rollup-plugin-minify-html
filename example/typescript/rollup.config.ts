'use strict';

import { rollup, InputOptions, OutputOptions } from 'rollup';
import { resolve } from 'path';
import typescript from 'rollup-plugin-typescript3';
import { minifyHtml, File, MinifyOptions } from 'rollup-plugin-minify-html';
import { RollupBuild } from 'rollup';

async function build() {
    const files: File[] = [{
        from: resolve('src', 'index.html'),
        to: resolve('dist', 'index.html')
    }];

    const options: MinifyOptions = {
        collapseWhitespace: true
    };

    const inputOptions: InputOptions = {
        input: resolve('src', 'index.ts'),

        plugins: [
            minifyHtml({ files, options }),
            typescript()
        ]

    };

    const outputOptions: OutputOptions = {
        file: resolve('dist', 'index.js')
    };

    const bundle: RollupBuild = await rollup(inputOptions);

    await bundle.write(outputOptions);
}

build();