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

.lueip4s5u {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M7.25 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m0 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M9 9.75v5.5M10.75 17h2.5");
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="lueip4s5u"/></g>`,
		"fallback": "uix:workflow-file",
	});
}

export default Component;
