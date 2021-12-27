<h1> CPF Validation :shipit:</h1>

![Testing Status](https://img.shields.io/github/workflow/status/fminetto/CPF-Validation/Run%20Tests?label=Tests&logo=jest&style=flat-square)

<a href="https://npmjs.org/@fminetto/cpfvalidation" target="_blank">
    <img alt="npm badge" src="https://img.shields.io/npm/v/@fminetto/cpfvalidation?label=NPM&logo=npm&style=for-the-badge"/>
</a>
<a href="https://classic.yarnpkg.com/en/package/@fminetto/cpfvalidation" target="_blank">
    <img alt="yarn badge" src="https://img.shields.io/npm/v/@fminetto/cpfvalidation?label=Yarn&logo=yarn&style=for-the-badge"/>
</a>
<divider/>

<h2>Usage:</h2>

<p>:heavy_exclamation_mark: ALL MASKS WILL BE IGNORED</p>

## Personal document - CPF 

```js
const {isCPFValid} = require('@fminetto/cpfvalidation');

// Will return a boolean indicating if is valid
isCPFValid("111.222.333-44");
```

## Business document - CNPJ 

```js
const {isCNPJValid} = require('@fminetto/cpfvalidation');

// Will return a boolean indicating if is valid
isCNPJValid("11.222.333/0001-44");
```