import { minifyHtml } from 'rollup-plugin-minify-html';

export default {
    input: 'src/index.js',
    plugins: [
        minifyHtml({
            files: [
                {
                    from: 'src/index.html',
                    to: 'dist/index.html'
                }
            ],
            options: {
                removeAttributeQuotes: true
            }
        })
    ],
    output: {
        file: 'dist/index.js',
        format: 'iife'
    }
};