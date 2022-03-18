# img-src-placeholder

Micro library to generate data-uri placeholder images of a given size.

## Features

- Blazing fast
- Zero dependencies
- Ultra-small: less than 1KB (minified)
- Works in browser
- Works in server-side node
- Typescript type definitions

## Usage

Plain JS:

```js
import { placeholder } from '@technically/img-src-placeholder';

document.querySelectorAll('img').forEach(function (img) {
  img.src = placeholder(100, 100); // placeholder returns a data-uri string ready-to-use as a `src` attribute. 
});
```

React:

```tsx
import { placeholder } from '@technically/img-src-placeholder';

interface Props {
    width: number;
    height: number;
}

export function ImagePlaceholder({ width, height }: Props) {
  return <img src={placeholder(width, height)} />;
}
```

## Credits 

Created with ❤️ by [Ivan Voskoboinyk](https://github.com/e1himself/) 🇺🇦
