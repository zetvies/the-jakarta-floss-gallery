/**
 * Creates an SVG component with customizable color
 * @param {string} color - Hex color code (with or without #). If not provided, a random color from the default palette will be used.
 * @param {string} uniqueId - Optional unique identifier for filter IDs to avoid conflicts when multiple SVGs are used
 * @returns {SVGElement} The SVG element
 */
export function createSVGComponent(color = null, uniqueId = '2277_3699') {
  // Default color palette
  const colorPalette = [
    '90FF77',
    'FF5627',
    '008177',
    'FFC61C',
    'FF443D',
    '8142FF',
    '28B7FF',
    'FF7ADC'
  ];

  // If no color provided, randomize from palette
  if (!color) {
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    color = colorPalette[randomIndex];
  }

  // Ensure color has # prefix
  if (!color.startsWith('#')) {
    color = '#' + color;
  }

  // Create SVG element
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '733');
  svg.setAttribute('height', '441');
  svg.setAttribute('viewBox', '0 0 733 441');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  // Create defs element with filters
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

  // Filter 0
  const filter0 = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
  filter0.setAttribute('id', `filter0_g_${uniqueId}`);
  filter0.setAttribute('x', '11.9848');
  filter0.setAttribute('y', '5.25921');
  filter0.setAttribute('width', '719.999');
  filter0.setAttribute('height', '431.634');
  filter0.setAttribute('filterUnits', 'userSpaceOnUse');
  filter0.setAttribute('color-interpolation-filters', 'sRGB');

  const feFlood0 = document.createElementNS('http://www.w3.org/2000/svg', 'feFlood');
  feFlood0.setAttribute('flood-opacity', '0');
  feFlood0.setAttribute('result', 'BackgroundImageFix');
  filter0.appendChild(feFlood0);

  const feBlend0 = document.createElementNS('http://www.w3.org/2000/svg', 'feBlend');
  feBlend0.setAttribute('mode', 'normal');
  feBlend0.setAttribute('in', 'SourceGraphic');
  feBlend0.setAttribute('in2', 'BackgroundImageFix');
  feBlend0.setAttribute('result', 'shape');
  filter0.appendChild(feBlend0);

  const feTurbulence0 = document.createElementNS('http://www.w3.org/2000/svg', 'feTurbulence');
  feTurbulence0.setAttribute('type', 'fractalNoise');
  feTurbulence0.setAttribute('baseFrequency', '0.0099999997764825821 0.0099999997764825821');
  feTurbulence0.setAttribute('numOctaves', '3');
  feTurbulence0.setAttribute('seed', '7513');
  filter0.appendChild(feTurbulence0);

  const feDisplacementMap0 = document.createElementNS('http://www.w3.org/2000/svg', 'feDisplacementMap');
  feDisplacementMap0.setAttribute('in', 'shape');
  feDisplacementMap0.setAttribute('scale', '17.018695831298828');
  feDisplacementMap0.setAttribute('xChannelSelector', 'R');
  feDisplacementMap0.setAttribute('yChannelSelector', 'G');
  feDisplacementMap0.setAttribute('result', 'displacedImage');
  feDisplacementMap0.setAttribute('width', '100%');
  feDisplacementMap0.setAttribute('height', '100%');
  filter0.appendChild(feDisplacementMap0);

  const feMerge0 = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
  feMerge0.setAttribute('result', `effect1_texture_${uniqueId}`);
  const feMergeNode0 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
  feMergeNode0.setAttribute('in', 'displacedImage');
  feMerge0.appendChild(feMergeNode0);
  filter0.appendChild(feMerge0);

  defs.appendChild(filter0);

  // Filter 1
  const filter1 = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
  filter1.setAttribute('id', `filter1_g_${uniqueId}`);
  filter1.setAttribute('x', '0.000417709');
  filter1.setAttribute('y', '7.6303');
  filter1.setAttribute('width', '732.028');
  filter1.setAttribute('height', '433.277');
  filter1.setAttribute('filterUnits', 'userSpaceOnUse');
  filter1.setAttribute('color-interpolation-filters', 'sRGB');

  const feFlood1 = document.createElementNS('http://www.w3.org/2000/svg', 'feFlood');
  feFlood1.setAttribute('flood-opacity', '0');
  feFlood1.setAttribute('result', 'BackgroundImageFix');
  filter1.appendChild(feFlood1);

  const feBlend1 = document.createElementNS('http://www.w3.org/2000/svg', 'feBlend');
  feBlend1.setAttribute('mode', 'normal');
  feBlend1.setAttribute('in', 'SourceGraphic');
  feBlend1.setAttribute('in2', 'BackgroundImageFix');
  feBlend1.setAttribute('result', 'shape');
  filter1.appendChild(feBlend1);

  const feTurbulence1 = document.createElementNS('http://www.w3.org/2000/svg', 'feTurbulence');
  feTurbulence1.setAttribute('type', 'fractalNoise');
  feTurbulence1.setAttribute('baseFrequency', '0.0099999997764825821 0.0099999997764825821');
  feTurbulence1.setAttribute('numOctaves', '3');
  feTurbulence1.setAttribute('seed', '7513');
  filter1.appendChild(feTurbulence1);

  const feDisplacementMap1 = document.createElementNS('http://www.w3.org/2000/svg', 'feDisplacementMap');
  feDisplacementMap1.setAttribute('in', 'shape');
  feDisplacementMap1.setAttribute('scale', '17.018695831298828');
  feDisplacementMap1.setAttribute('xChannelSelector', 'R');
  feDisplacementMap1.setAttribute('yChannelSelector', 'G');
  feDisplacementMap1.setAttribute('result', 'displacedImage');
  feDisplacementMap1.setAttribute('width', '100%');
  feDisplacementMap1.setAttribute('height', '100%');
  filter1.appendChild(feDisplacementMap1);

  const feMerge1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
  feMerge1.setAttribute('result', `effect1_texture_${uniqueId}`);
  const feMergeNode1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
  feMergeNode1.setAttribute('in', 'displacedImage');
  feMerge1.appendChild(feMergeNode1);
  filter1.appendChild(feMerge1);

  defs.appendChild(filter1);

  // Filter 2
  const filter2 = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
  filter2.setAttribute('id', `filter2_dg_${uniqueId}`);
  filter2.setAttribute('x', '17.6106');
  filter2.setAttribute('y', '-0.000558853');
  filter2.setAttribute('width', '714.584');
  filter2.setAttribute('height', '319.579');
  filter2.setAttribute('filterUnits', 'userSpaceOnUse');
  filter2.setAttribute('color-interpolation-filters', 'sRGB');

  const feFlood2 = document.createElementNS('http://www.w3.org/2000/svg', 'feFlood');
  feFlood2.setAttribute('flood-opacity', '0');
  feFlood2.setAttribute('result', 'BackgroundImageFix');
  filter2.appendChild(feFlood2);

  const feColorMatrix2 = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
  feColorMatrix2.setAttribute('in', 'SourceAlpha');
  feColorMatrix2.setAttribute('type', 'matrix');
  feColorMatrix2.setAttribute('values', '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0');
  feColorMatrix2.setAttribute('result', 'hardAlpha');
  filter2.appendChild(feColorMatrix2);

  const feOffset2 = document.createElementNS('http://www.w3.org/2000/svg', 'feOffset');
  feOffset2.setAttribute('dy', '4.33046');
  filter2.appendChild(feOffset2);

  const feGaussianBlur2 = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
  feGaussianBlur2.setAttribute('stdDeviation', '4.33046');
  filter2.appendChild(feGaussianBlur2);

  const feComposite2 = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
  feComposite2.setAttribute('in2', 'hardAlpha');
  feComposite2.setAttribute('operator', 'out');
  filter2.appendChild(feComposite2);

  const feColorMatrix2b = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
  feColorMatrix2b.setAttribute('type', 'matrix');
  feColorMatrix2b.setAttribute('values', '0 0 0 0 0.815317 0 0 0 0 0.195523 0 0 0 0 0.172425 0 0 0 1 0');
  filter2.appendChild(feColorMatrix2b);

  const feBlend2a = document.createElementNS('http://www.w3.org/2000/svg', 'feBlend');
  feBlend2a.setAttribute('mode', 'normal');
  feBlend2a.setAttribute('in2', 'BackgroundImageFix');
  feBlend2a.setAttribute('result', `effect1_dropShadow_${uniqueId}`);
  filter2.appendChild(feBlend2a);

  const feBlend2b = document.createElementNS('http://www.w3.org/2000/svg', 'feBlend');
  feBlend2b.setAttribute('mode', 'normal');
  feBlend2b.setAttribute('in', 'SourceGraphic');
  feBlend2b.setAttribute('in2', `effect1_dropShadow_${uniqueId}`);
  feBlend2b.setAttribute('result', 'shape');
  filter2.appendChild(feBlend2b);

  const feTurbulence2 = document.createElementNS('http://www.w3.org/2000/svg', 'feTurbulence');
  feTurbulence2.setAttribute('type', 'fractalNoise');
  feTurbulence2.setAttribute('baseFrequency', '0.0099999997764825821 0.0099999997764825821');
  feTurbulence2.setAttribute('numOctaves', '3');
  feTurbulence2.setAttribute('seed', '7513');
  filter2.appendChild(feTurbulence2);

  const feDisplacementMap2 = document.createElementNS('http://www.w3.org/2000/svg', 'feDisplacementMap');
  feDisplacementMap2.setAttribute('in', 'shape');
  feDisplacementMap2.setAttribute('scale', '17.018695831298828');
  feDisplacementMap2.setAttribute('xChannelSelector', 'R');
  feDisplacementMap2.setAttribute('yChannelSelector', 'G');
  feDisplacementMap2.setAttribute('result', 'displacedImage');
  feDisplacementMap2.setAttribute('width', '100%');
  feDisplacementMap2.setAttribute('height', '100%');
  filter2.appendChild(feDisplacementMap2);

  const feMerge2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
  feMerge2.setAttribute('result', `effect2_texture_${uniqueId}`);
  const feMergeNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
  feMergeNode2.setAttribute('in', 'displacedImage');
  feMerge2.appendChild(feMergeNode2);
  filter2.appendChild(feMerge2);

  defs.appendChild(filter2);

  svg.appendChild(defs);

  // Group 0
  const g0 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g0.setAttribute('filter', `url(#filter0_g_${uniqueId})`);
  const path0 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path0.setAttribute('d', 'M32.9395 13.7686L723.474 55.5222L687.012 106.62L699.188 179.946L701.601 428.384L357.507 396.187L20.4933 392.577L32.9395 13.7686Z');
  path0.setAttribute('fill', color);
  g0.appendChild(path0);
  svg.appendChild(g0);

  // Group 1
  const g1 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g1.setAttribute('filter', `url(#filter1_g_${uniqueId})`);
  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path1.setAttribute('d', 'M29.5605 16.1396L319.38 125.543C352.617 138.09 388.908 140.114 423.335 131.339L723.519 54.8313L702.468 432.398L8.5093 393.707L29.5605 16.1396Z');
  path1.setAttribute('fill', color);
  g1.appendChild(path1);
  svg.appendChild(g1);

  // Group 2
  const g2 = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g2.setAttribute('filter', `url(#filter2_dg_${uniqueId})`);
  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path2.setAttribute('d', 'M413.382 290.769C383.346 313.807 340.983 311.445 313.694 285.211L26.2716 16.6473C26.2716 16.6473 33.6815 7.15143 97.1952 8.67446C160.709 10.1975 318.115 15.7873 386.045 20.4421C453.975 25.0969 492.819 28.1964 559.834 34.4689C626.849 40.7414 723.533 54.4389 723.533 54.4389L413.382 290.769Z');
  path2.setAttribute('fill', color);
  g2.appendChild(path2);
  svg.appendChild(g2);

  return svg;
}

/**
 * Helper function to get a random color from the default palette
 * @returns {string} A random hex color from the palette
 */
export function getRandomColor() {
  const colorPalette = [
    '90FF77',
    'FF5627',
    '008177',
    'FFC61C',
    'FF443D',
    '8142FF',
    '28B7FF',
    'FF7ADC'
  ];
  const randomIndex = Math.floor(Math.random() * colorPalette.length);
  return '#' + colorPalette[randomIndex];
}

