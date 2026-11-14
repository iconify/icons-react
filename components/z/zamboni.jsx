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

.n4hwasbgm {
  d: path("M4.5 19a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m9 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.ycaxy-3rl {
  d: path("M5.125 9h13.75a2.625 2.625 0 0 1 2.625 2.625v2.25a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 13.875v-2.25A2.625 2.625 0 0 1 5.125 9M6.5 9V4.5h7L16 9");
}
</style><g class="hntgybcog"><path class="ycaxy-3rl"/><path class="n4hwasbgm"/></g>`,
		"fallback": "uix:zamboni",
	});
}

export default Component;
