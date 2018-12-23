import Vue from 'vue';
import browserEnv from 'browser-env';
import hooks from 'require-extension-hooks';

// Add fetch to global
import 'isomorphic-fetch';

// Setup browser environment
browserEnv({});

// Add localstorage mock
import 'mock-local-storage';
window.localStorage = global.localStorage;

// Setup Vue.js to remove production tip
Vue.config.productionTip = false;

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push();

// Setup vue and js files to be processed by `require-extension-hooks-babel`
// This also requires `require-extension-hooks-vue`
hooks(['vue', 'js']).plugin('babel').push();