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
		"content": `<style>.y1a6vnbgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6m-8-8v8m-6.875 0h13.75a2.625 2.625 0 0 1 2.625 2.625v.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 13.875v-.75A2.625 2.625 0 0 1 5.125 10.5m.875 3h12M6.5 19.25l1.5 1.5l1.5-1.5m5 0l1.5 1.5l1.5-1.5");
}
</style><path class="y1a6vnbgi"/>`,
		"fallback": "uix:window-air-conditioner",
	});
}

export default Component;
