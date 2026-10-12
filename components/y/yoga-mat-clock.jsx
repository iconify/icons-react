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
		"content": `<style>.g6yrz3b3f {
  d: path("M16.25 10.5a2 2 0 1 1-2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m4fs9accb {
  d: path("M16.25 17H4.75a1.5 1.5 0 0 1 0-3h7.26a4.5 4.5 0 1 1 4.24 3");
}
</style><g class="hntgybcog"><path class="m4fs9accb"/><path class="g6yrz3b3f"/></g>`,
		"fallback": "iconoven:yoga-mat-clock",
	});
}

export default Component;
