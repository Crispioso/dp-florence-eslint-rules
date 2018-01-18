# eslint-plugin-dp-florence-eslint-rules

ESLint rules for the Office for National Statistics publishing platform, Florence.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-dp-florence-eslint-rules`:

```
$ npm install eslint-plugin-dp-florence-eslint-rules --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-dp-florence-eslint-rules` globally.

## Usage

Add `dp-florence-eslint-rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "dp-florence-eslint-rules"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "dp-florence-eslint-rules/initialise-state-properties": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





