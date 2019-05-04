import { Plugin } from 'rollup';
import { readFile, writeFile } from 'fs';

// @ts-ignore
import { minify } from 'html-minifier';

interface Files {
    from: string;
    to: string;
};

interface Options {
    files: Files[];
    options: object;
};

function fileOpen(path: string): Promise<string> {
    return new Promise(function(resolve, reject) {
        readFile(path, function(error, data) {
            if (error) {
                reject(error);
            }

            resolve(data.toString());
        });
    });
}

function fileWrite(path: string, data: string): Promise<void> {
    return new Promise(function(resolve, reject) {
        writeFile(path, data, function(error) {
            if (error) {
                reject(error);
            }
        
            resolve();
        });
    });
}

export function minifyHtml({ files, options }: Options): Plugin {
    return {
        name: 'rollup-plugin-minify-html',

        async generateBundle(): Promise<void> {
            for (const { from, to } of files) {
                const data: string = await fileOpen(from);
                const minified: string = minify(data, options);

                await fileWrite(to, minified);
            }
        }
    };
}