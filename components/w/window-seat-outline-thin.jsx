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

.i5be34b7d {
  d: path("M13 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.qoupp8b_p {
  d: path("M4 4v16h8V4Z");
}
</style><g class="hntgybcog"><path class="qoupp8b_p"/><path class="i5be34b7d"/></g>`,
		"fallback": "iconmind:window-seat-outline-thin",
	});
}

export default Component;
