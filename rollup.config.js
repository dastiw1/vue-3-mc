import * as _ from 'lodash';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import typescript from 'typescript';
import ts_plugin2 from 'rollup-plugin-typescript2';

// Plugin to rewrite import paths to lowercase
const rewritePaths = () => ({
    name: 'rewrite-paths',
    renderChunk(code) {
        return {
            code: code
                .replace(/from ['"]\.\/Validation\/locale['"]/g, "from './validation/locale'")
                .replace(/from ['"]\.\/Validation\/index['"]/g, "from './validation/index'")
                .replace(/export \* from ['"]\.\/Validation\/locale['"]/g, "export * from './validation/locale'")
                .replace(/export \* from ['"]\.\/Validation\/index['"]/g, "export * from './validation/index'")
                .replace(/from ['"]\.\/locale['"]/g, "from './locale'"),
            map: null
        };
    }
});

const BASE = {
    external: (id) => {
        return id === 'lodash' 
            || id.startsWith('lodash/')
            || id === 'lodash-es'
            || id.startsWith('lodash-es/')
            || id === 'vue'
            || id.startsWith('vue/')
            || id === 'axios';
    },
    plugins: [
        resolve(),
        commonjs(),
        ts_plugin2({
            typescript,
            useTsconfigDeclarationDir: true,
        }),
        rewritePaths(),
    ],
};

const MAIN = _.assign({}, BASE, {
    input: 'src/index.ts',
    external: (id) => {
        return BASE.external(id)
            || id.endsWith('/Validation/locale')
            || id.endsWith('/Validation/index')
            || id.endsWith('\\Validation\\locale')
            || id.endsWith('\\Validation\\index')
            || id === 'validator'
            || id.startsWith('validator/');
    },
    output: [
        {file: pkg.main, format: 'cjs'},
        {file: pkg.module, format: 'es'},
    ],
});

const VALIDATION = _.assign({}, BASE, {
    input: 'src/Validation/index.ts',
    external: (id) => {
        return BASE.external(id)
            || id.endsWith('/locale')
            || id.endsWith('\\locale');
    },
    output: [
        {file: 'validation/index.js', format: 'es'},
    ],
});

const LOCALES = _.assign({}, BASE, {
    input: './src/Validation/locale.ts',
    output: [
        {file: 'validation/locale.js', format: 'es'},
    ],
});

export default [
    MAIN,
    VALIDATION,
    LOCALES,
];
