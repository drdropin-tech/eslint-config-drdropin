## Installing

1. In your project folder, run:

```
npm i -D eslint-config-drdropin
npx install-peerdeps --dev eslint-config-drdropin
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```js
{
  'extends': [
    'drdropin'
  ]
}
```

---

This repository is inspired by [eslint-config-leozera](https://github.com/leonardofaria/eslint-config-leozera).
