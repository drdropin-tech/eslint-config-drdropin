# eslint-config-drdropin

Dr. Dropin [ESLint](https://eslint.org/) config

## Installing

1. In your project folder, add an `.npmrc` file that contains this line: `registry=https://npm.pkg.github.com/drdropin-tech`

2. Now, in the same folder, run:

```
(
  export PKG=@drdropin-tech/eslint-config-drdropin;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

3. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```js
{
  'extends': [
    '@drdropin-tech/eslint-config-drdropin'
  ]
}
```

---

This repository is inspired by [eslint-config-leozera](https://github.com/leonardofaria/eslint-config-leozera).
