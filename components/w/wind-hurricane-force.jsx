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
		"content": `<style>.x7hroyc1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5h14a3 3 0 1 0-3-3m-11 6.75h16a3 3 0 1 1-3 3m-13 1H11a2.5 2.5 0 1 1-2.5 2.5");
}
</style><path class="x7hroyc1b"/>`,
		"fallback": "uix:wind-hurricane-force",
	});
}

export default Component;
