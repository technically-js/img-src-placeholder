/**
 * @param {number} width Placeholder width
 * @param {number} height Placeholder height
 * @returns {string} Ready-to-use image src data-uri string.
 */
export function placeholder(width: number, height: number): string {
  const valid = typeof width === 'number' && typeof height === 'number'
    && width > 0 && width <= 0xFFFF
    && height > 0 && height <= 0xFFFF
    && width === Math.round(width) && height === Math.round(height);

  if (!valid) {
    throw new Error('Width and height have to be integer numbers between 0 and 65536.');
  }

  const widthBytes = [width % 256, Math.floor(width / 256)];
  const heightBytes = [height % 256, Math.floor(height / 256)];

  const bytes = [
    0x47, 0x49, 0x46, // GIF
    0x38, 0x39, 0x61, // 89a

    // Logical screen descriptor
    ...widthBytes, // Canvas width
    ...heightBytes, // Canvas height
    0b10010000, // Packed field
    0x00, // Background color index
    0x00, // Pixel aspect ratio

    // Global color table
    0x00, 0x00, 0x00,
    0xFF, 0x00, 0x00,

    // Graphics control extension
    0x21, // Extension introducer
    0xF9, // Graphic control label
    0x04, // Byte size
    0b00000000, // Packed field
    0x00, 0x00, // Delay time
    0x00, // Transparent color index
    0x00, // Block terminator

    // Image Descriptor
    0x2C, // Image separator
    0x00, 0x00, // Image left
    0x00, 0x00, // Image top
    ...widthBytes, // Image width
    ...heightBytes, // Image height
    0b00000000, // Packed field

    // Image Data
    0x02, // LZW Minimum Code Size
    0x00, // Block terminator

    // Trailer
    0x3B,
  ];

  const buffer = String.fromCharCode(...bytes);
  const base64 = btoa(buffer);

  return 'data:image/gif;base64,' + base64;
}
