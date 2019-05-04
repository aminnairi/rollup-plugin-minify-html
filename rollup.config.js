import { readFileSync } from 'fs';
import { resolve } from 'path';
import typescript from 'rollup-plugin-typescript3';
import remove from 'rollup-plugin-delete';

const dependencies = Object.keys(JSON.parse(readFileSync(resolve('package.json')).toString()).dependencies)

export default [{
    input: resolve('index.ts'),
    plugins: [
        remove({
            targets: resolve('dist')
        }),
        typescript()
    ],
    external: [
        ...dependencies,
        'fs'
    ],
    output: {
        file: resolve('dist', 'index.js'),
        format: 'cjs'
    }
}, {
    input: resolve('index.ts'),
    plugins: [
        typescript()
    ],
    external: [
        ...dependencies,
        'fs'
    ],
    output: {
        file: resolve('dist', 'index.mjs'),
        format: 'esm'
    }
}];