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
		"content": `<style>.dzl27690x {
  d: path("M4.5 9q0-4 4-4q0 4-4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jky2v4bad {
  d: path("M3 9h12a3 3 0 1 0-3-3m-9 9h14.5a3 3 0 1 1-3 3");
}
</style><g class="hntgybcog"><path class="jky2v4bad"/><path class="dzl27690x"/></g>`,
		"fallback": "uix:wind-gentle-breeze",
	});
}

export default Component;
