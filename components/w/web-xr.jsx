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
		"content": `<style>.eidey0beq {
  d: path("M8 11h8a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-1.5L13.25 16h-2.5L9.5 17.5H8a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2");
}

.ghdle1bhl {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 16.125v-8.25A4.375 4.375 0 0 1 6.875 3.5M2.5 8h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ghdle1bhl"/><path class="eidey0beq"/></g>`,
		"fallback": "uix:web-xr",
	});
}

export default Component;
