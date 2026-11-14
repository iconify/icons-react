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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.r5eyhfb1x {
  d: path("M8 8h5m-2.5 0V6.5M9 8c0 2 1 4 3 5m1-5c0 2.5-2 4.5-5 5.5m5 4.5l3-7l3 7m-5-2h4");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="r5eyhfb1x"/></g>`,
		"fallback": "uix:world-languages",
	});
}

export default Component;
