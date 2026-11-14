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
		"content": `<style>.pgcn_ubtj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 18.5h.01m-2.485-2.475a3.5 3.5 0 0 1 4.95 0M4.55 13.55a7 7 0 0 1 9.9 0M2.751 10.457a10.5 10.5 0 0 1 13.498 0M18 15v3.25M18 21h.01");
}
</style><path class="pgcn_ubtj"/>`,
		"fallback": "uix:wifi-insecure",
	});
}

export default Component;
