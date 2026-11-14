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
		"content": `<style>.uyi4-4f9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.375 2.5h9.25A4.375 4.375 0 0 1 21 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 17.125V6.875A4.375 4.375 0 0 1 7.375 2.5M7.5 6v2.5m3-3.5v3m3-3v3m3-2v2.5m-9 2l1 4m2-4.5l.25 4.5M13.5 10l-.25 4.5m3.25-4l-1 4M10 17l.75 2M14 17l-.75 2");
}
</style><path class="uyi4-4f9m"/>`,
		"fallback": "uix:xray-hand",
	});
}

export default Component;
