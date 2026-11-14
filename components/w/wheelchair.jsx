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

.jtegwwo-n {
  d: path("M14.505 12.345a5.5 5.5 0 1 1-9.01 0");
}

.riaurslab {
  d: path("M8 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M10 8v4.5h5.5l2.5 7");
}
</style><g class="hntgybcog"><path class="riaurslab"/><path class="jtegwwo-n"/></g>`,
		"fallback": "uix:wheelchair",
	});
}

export default Component;
