# TSLint Config

[![Version](https://img.shields.io/npm/v/@datalogix/tslint-config.svg)](https://www.npmjs.com/package/@datalogix/tslint-config)
[![Downloads](https://img.shields.io/npm/dt/@datalogix/tslint-config.svg)](https://www.npmjs.com/package/@datalogix/tslint-config)
[![Build Status](https://img.shields.io/travis/datalogix/tslint-config)](https://travis-ci.org/datalogix/tslint-config)
[![Codecov](https://img.shields.io/codecov/c/github/datalogix/tslint-config)](https://codecov.io/gh/datalogix/tslint-config)
[![License](https://img.shields.io/npm/l/@datalogix/tslint-config.svg)](LICENSE)

> TSLint [shareable config](http://palantir.github.io/tslint/usage/cli/)

## Install

```bash
npm install --save-dev @datalogix/tslint-config
```

## Usage

> TSLint [Configuration File Formats](http://palantir.github.io/tslint/usage/tslint-json/)

Add some TSLint config to your `tslint.json`:

```bash
{
  "extends": "@datalogix/tslint-config"
}
```

## Usage direct on command line

```bash
tslint --config ./node_modules/@datalogix/tslint-config/index.js
```

> **Note:** It is not necessary to create the `tslint.json` file.
