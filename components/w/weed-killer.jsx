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
		"content": `<style>.ajbft4b5j {
  d: path("M8 18.5c0-3 1.25-5 3.25-5c0 3-1.25 5-3.25 5M18.75 4h.01m-.01 3.5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n439fdbjl {
  d: path("M7.625 10h3.75A2.625 2.625 0 0 1 14 12.625v6.25a2.625 2.625 0 0 1-2.625 2.625h-3.75A2.625 2.625 0 0 1 5 18.875v-6.25A2.625 2.625 0 0 1 7.625 10M6.5 10V4.5h9V7H12v3");
}
</style><g class="hntgybcog"><path class="n439fdbjl"/><path class="ajbft4b5j"/></g>`,
		"fallback": "uix:weed-killer",
	});
}

export default Component;
