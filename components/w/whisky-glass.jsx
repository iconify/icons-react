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
		"content": `<style>.rownf_u8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 4l1.75 14Q6 20 8 20h8q2 0 2.25-2L20 4M4.75 10h14.5M5.5 16.5h13");
}
</style><path class="rownf_u8k"/>`,
		"fallback": "uix:whisky-glass",
	});
}

export default Component;
