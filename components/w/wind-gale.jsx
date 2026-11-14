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
		"content": `<style>.nsns9rzhs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14 20l2.5-9M14 9a3.25 5 0 1 0 6.5 0A3.25 5 0 1 0 14 9M2.5 20h19M2.5 6.5H11M2.5 11h7");
}
</style><path class="nsns9rzhs"/>`,
		"fallback": "uix:wind-gale",
	});
}

export default Component;
