import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e-elj4a7k {
  d: path("M6.5 8V6A2.5 2.5 0 0 1 9 3.5h10A2.5 2.5 0 0 1 21.5 6v8a2.5 2.5 0 0 1-2.5 2.5h-3M2.5 12H16");
}

.jbfizju1y {
  d: path("M2.5 8H16v12.5H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jbfizju1y"/><path class="e-elj4a7k"/></g>`,
		"fallback": "uix-sharp:window-restore",
	});
}

export default Component;
