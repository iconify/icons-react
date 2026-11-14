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
		"content": `<style>.ukd3_zb6b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 4h3.5a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 8.5 7.75v-2A1.75 1.75 0 0 1 10.25 4m-2.5 5.5h8.5A1.75 1.75 0 0 1 18 11.25v2A1.75 1.75 0 0 1 16.25 15h-8.5A1.75 1.75 0 0 1 6 13.25v-2A1.75 1.75 0 0 1 7.75 9.5M5.25 15h13.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 18.75 21H5.25a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 5.25 15M8.5 6.75h7M6 12.25h12M3.5 18h17");
}
</style><path class="ukd3_zb6b"/>`,
		"fallback": "uix:wedding-cake-tiered",
	});
}

export default Component;
