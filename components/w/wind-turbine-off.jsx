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
		"content": `<style>.ddt705-lj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.5 6.5h-5m5 0L18 2.25M15.5 6.5l2.5 4.25M15.5 6.5v5.1m0 7.8v2.1m-12-18l17 17");
}
</style><path class="ddt705-lj"/>`,
		"fallback": "uix:wind-turbine-off",
	});
}

export default Component;
