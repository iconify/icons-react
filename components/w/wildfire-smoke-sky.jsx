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
		"content": `<style>.at2pr2o2n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 10.5a3 3 0 0 1 .25-6a4.25 4.25 0 0 1 7.5.5a2.75 2.75 0 0 1 .75 5.5Zm4 11c-2.5 0-4.25-1.75-4.25-4s1.75-3.5 4-4.75c-.25 1.5.5 2.75 1.5 3.25c.25-1 1-1.75 1.75-2.25c.75 1.25 1.25 2.5 1.25 3.75c0 2.25-1.75 4-4.25 4");
}
</style><path class="at2pr2o2n"/>`,
		"fallback": "uix:wildfire-smoke-sky",
	});
}

export default Component;
