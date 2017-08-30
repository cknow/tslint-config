# TSLint Config
> TSLint [shareable config](http://palantir.github.io/tslint/usage/cli/)

[![NPM Version](https://img.shields.io/npm/v/@cknow/tslint-config.svg)](https://www.npmjs.com/package/@cknow/tslint-config)
[![Downloads](https://img.shields.io/npm/dt/@cknow/tslint-config.svg)](https://www.npmjs.com/package/@cknow/tslint-config)
[![MIT License](https://img.shields.io/npm/l/@cknow/tslint-config.svg)](LICENSE)

[![Build Status](https://travis-ci.org/cknow/tslint-config.svg?branch=master)](https://travis-ci.org/cknow/tslint-config)
[![Build status](https://ci.appveyor.com/api/projects/status/8clpagh6wqasa8v9/branch/master?svg=true)](https://ci.appveyor.com/project/cknow/tslint-config/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/cknow/tslint-config/badge.svg?branch=master)](https://coveralls.io/github/cknow/tslint-config?branch=master)

[![Dependency Status](https://dependencyci.com/github/cknow/tslint-config/badge)](https://dependencyci.com/github/cknow/tslint-config)
[![Dependencies Status](https://david-dm.org/cknow/tslint-config/status.svg)](https://david-dm.org/cknow/tslint-config)
[![devDependencies Status](https://david-dm.org/cknow/tslint-config/dev-status.svg)](https://david-dm.org/cknow/tslint-config?type=dev)
[![peerDependencies Status](https://david-dm.org/cknow/tslint-config/peer-status.svg)](https://david-dm.org/cknow/tslint-config?type=peer)

[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/cknow/tslint-config.svg)](http://isitmaintained.com/project/cknow/tslint-config)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/cknow/tslint-config.svg)](http://isitmaintained.com/project/cknow/tslint-config)
[![Gitter](https://badges.gitter.im/cknow/tslint-config.svg)](https://gitter.im/cknow/tslint-config?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Install

```
npm install --save-dev @cknow/tslint-config
```

## Usage
> TSLint [Configuration File Formats](http://palantir.github.io/tslint/usage/tslint-json/)

Add some TSLint config to your `tslint.json`:

```
{
  "extends": "@cknow/tslint-config"
}
```

## Usage direct on command line

```
tslint --config ./node_modules/@cknow/tslint-config/index.js
```

> **Note:** It is not necessary to create the `tslint.json` file.
