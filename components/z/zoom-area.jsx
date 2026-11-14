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
		"content": `<style>.wd16mqb_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7V5.5a2 2 0 0 1 2-2H7m3.5 0h3m3.5 0h1.5a2 2 0 0 1 2 2V7m-17 3.5v3m3.5 7H5.5a2 2 0 0 1-2-2V17m7.5-2.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m6 2.5l3.5 3.5");
}
</style><path class="wd16mqb_w"/>`,
		"fallback": "uix:zoom-area",
	});
}

export default Component;
