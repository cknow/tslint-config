'use strict';

module.exports = {
    extends: [
        './rules/functionality.js',
        './rules/maintainability.js',
        './rules/specific.js',
        './rules/style.js'
    ].map(require.resolve)
};
