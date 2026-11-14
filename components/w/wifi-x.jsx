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
		"content": `<style>.mf-ffgb6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 18h.01m-3.546-3.536A5 5 0 0 1 13 13.67m-9.218-2.388a9.5 9.5 0 0 1 13.436 0M2.075 6.819a14 14 0 0 1 16.85 0M15.5 15.5l5 5m0-5l-5 5");
}
</style><path class="mf-ffgb6x"/>`,
		"fallback": "uix:wifi-x",
	});
}

export default Component;
