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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.klblvjb6w {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 12.125v-4.25A4.375 4.375 0 0 1 6.875 3.5M12 16.5v4m-4 0h8M7.75 6.75l2.5 2.5m0-2.5l-2.5 2.5m6-2.5l2.5 2.5m0-2.5l-2.5 2.5");
}

.mcmi4cctf {
  d: path("m9 13l1.5-1.25L12 13l1.5-1.25L15 13");
}
</style><g class="hntgybcog"><path class="klblvjb6w"/><path class="mcmi4cctf"/></g>`,
		"fallback": "uix:zombie-computer",
	});
}

export default Component;
