import assert from 'assert';
import { placeholder } from './../dist/placeholder.mjs';

const transparent1x1 = placeholder(1, 1);
const transparent100x100 = placeholder(100, 100);
const blue30x40 = placeholder(30, 40, 'blue');

assert(transparent1x1 === 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgICAgICAgCiAgICAgICA8L3N2Zz4=');
assert(transparent100x100 === 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICAgICAgICAKICAgICAgIDwvc3ZnPg==');
assert(blue30x40 === 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAzMCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgICAgICAgIDxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSI0MCIgZmlsbD0iYmx1ZSIvPgogICAgICAgPC9zdmc+');

console.log('OK');

