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
		"content": `<style>.wnrp95yui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 12h16.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 3.75 12m.75 2.5v7m15-7v7M14.5 5h1A1.5 1.5 0 0 1 17 6.5v4a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-4A1.5 1.5 0 0 1 14.5 5M9 6za1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 9 12a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 9 6M3.5 9h4m-4-2.5v5");
}
</style><path class="wnrp95yui"/>`,
		"fallback": "uix:workshop-room",
	});
}

export default Component;
