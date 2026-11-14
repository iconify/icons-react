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
		"content": `<style>.iblzp2ble {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h1.75A2.625 2.625 0 0 1 9.5 5.125v1.75A2.625 2.625 0 0 1 6.875 9.5h-1.75A2.625 2.625 0 0 1 2.5 6.875v-1.75A2.625 2.625 0 0 1 5.125 2.5M14 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-8.875 8.5h1.75A2.625 2.625 0 0 1 9.5 17.125v1.75A2.625 2.625 0 0 1 6.875 21.5h-1.75A2.625 2.625 0 0 1 2.5 18.875v-1.75A2.625 2.625 0 0 1 5.125 14.5M9.5 6H14M6 9.5v5m11.135.545l2.04 1.195a1.75 1.75 0 0 1 0 3.02l-2.04 1.195a1.75 1.75 0 0 1-2.635-1.509v-2.392a1.75 1.75 0 0 1 2.635-1.509");
}
</style><path class="iblzp2ble"/>`,
		"fallback": "uix:workflow-dispatch",
	});
}

export default Component;
