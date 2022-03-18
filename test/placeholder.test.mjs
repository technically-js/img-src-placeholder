import assert from 'assert';
import { placeholder } from './../dist/placeholder.mjs';

const placeholder1x1 = placeholder(1, 1);
const placeholder100x100 = placeholder(100, 100);

assert(placeholder1x1 === 'data:image/gif;base64,R0lGODlhAQABAJAAAAAAAP8AACH5BAAAAAAALAAAAAABAAEAAAIAOw==');
assert(placeholder100x100 === 'data:image/gif;base64,R0lGODlhZABkAJAAAAAAAP8AACH5BAAAAAAALAAAAABkAGQAAAIAOw==');
assert(placeholder1x1 !== placeholder100x100);

console.log('OK');

