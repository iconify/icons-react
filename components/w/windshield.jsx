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
		"content": `<style>.zeafuqd3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.14 16.04l1.72-8.58Q5.25 5.5 7.25 5.5h9.5q2 0 2.39 1.96l1.72 8.58Q21.25 18 19.25 18H4.75q-2 0-1.61-1.96m4.61-1.54l4-5m-.5 5.75l2.25-2.75");
}
</style><path class="zeafuqd3g"/>`,
		"fallback": "iconoven:windshield",
	});
}

export default Component;
