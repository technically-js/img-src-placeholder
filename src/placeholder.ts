/**
 * @param {number} width Placeholder width
 * @param {number} height Placeholder height
 * @param {string?} color Background color (CSS color value)
 * @returns {string} Ready-to-use image src data-uri string.
 */
export function placeholder(width: number, height: number, color: string = 'transparent'): string {
  const valid = typeof width === 'number' && typeof height === 'number'
    && width > 0 && width <= 0xFFFF
    && height > 0 && height <= 0xFFFF
    && width === Math.round(width) && height === Math.round(height);

  if (!valid) {
    throw new Error('Width and height have to be integers greater or equal to 0.');
  }

  const image = svg(width, height, color);

  return 'data:image/svg+xml;base64,' + base64(image);
}

function svg(width: number, height: number, color: string): string {
  return (
    `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
          ${color !== 'transparent' ? `<rect width="${width}" height="${height}" fill="${color}"/>` : ''}
       </svg>`
  );
}

function base64(value: string): string {
  if (typeof btoa === 'function') {
    return btoa(value);
  }

  return Buffer.from(value).toString('base64');
}