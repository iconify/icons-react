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
		"content": `<style>.hh0l5vb6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10l.5 5a5.5 5.5 0 0 1-11 0Zm5 10.5V21m-4 0h8M6.5 8h11");
}
</style><path class="hh0l5vb6v"/>`,
		"fallback": "uix:white-wine",
	});
}

export default Component;
