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

.q8dreybup {
  d: path("M4.75 4h14.5q2 0 1.01 1.74l-7.27 12.77q-.99 1.74-1.98 0L3.74 5.74Q2.75 4 4.75 4");
}

.t2z2l2inr {
  d: path("M8.75 7.25h6.5q1 0 .51.87l-3.27 5.76q-.49.87-.98 0L8.24 8.12q-.49-.87.51-.87");
}
</style><g class="hntgybcog"><path class="q8dreybup"/><path class="t2z2l2inr"/></g>`,
		"fallback": "iconoven:yield-ahead",
	});
}

export default Component;
