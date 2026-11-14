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
		"content": `<style>.egs8wo4ve {
  d: path("M2.5 19.5c5 0 6-12.5 9.5-12.5s4.5 12.5 9.5 12.5m-9.5 0v2m2.5-2v2m2.5-2v2m0-13v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p5_wp8bka {
  fill: currentColor;
  d: path("M15.75 6.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="egs8wo4ve"/><path class="p5_wp8bka"/></g>`,
		"fallback": "uix:z-score",
	});
}

export default Component;
