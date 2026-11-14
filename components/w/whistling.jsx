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

.q79wodb6k {
  d: path("M6.5 16a2.25 1.5 0 1 0 4.5 0a2.25 1.5 0 1 0-4.5 0m10.25-7.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0v-6Q22 3 22 5.75");
}

.um7uuabdp {
  d: path("M2.5 15.5c0-4 2.75-6.25 5-5.25l1.25 1l1.25-1c2.25-1 5 1.25 5 5.25c0 3.5-3 6-6.25 6S2.5 19 2.5 15.5");
}
</style><g class="hntgybcog"><path class="um7uuabdp"/><path class="q79wodb6k"/></g>`,
		"fallback": "uix:whistling",
	});
}

export default Component;
