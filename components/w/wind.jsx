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
		"content": `<style>.jmq1ixbvx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9H14a3 3 0 1 0-3-3m-8.5 7h16a2.75 2.75 0 1 1-2.75 2.75M2.5 17h7");
}
</style><path class="jmq1ixbvx"/>`,
		"fallback": "uix:wind",
	});
}

export default Component;
