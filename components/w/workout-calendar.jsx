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
		"content": `<style>.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.mjnf-fbgm {
  d: path("M14.3 21.5H3V4h18v7.8m0 7.9v1.8h-1.8M8 2.5v3m8-3v3m-13 3h18m-13 5h.01m4.49 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mjnf-fbgm"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:workout-calendar",
	});
}

export default Component;
