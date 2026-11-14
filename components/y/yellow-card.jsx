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
		"content": `<style>.fl91rq_av {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.492 4.618l5.135 1.092a2.625 2.625 0 0 1 2.022 3.113l-2.027 9.537a2.625 2.625 0 0 1-3.114 2.022L6.373 19.29a2.625 2.625 0 0 1-2.022-3.113L6.378 6.64a2.625 2.625 0 0 1 3.114-2.022M19.5 4.5l2-1.5M20 8.25l2 .5");
}
</style><path class="fl91rq_av"/>`,
		"fallback": "uix:yellow-card",
	});
}

export default Component;
