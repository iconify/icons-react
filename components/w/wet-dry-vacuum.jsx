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
		"content": `<style>.emvyvcb_g {
  d: path("M4 19.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m4-8.5c3.5 0 5 1.5 5 4.5V19M3 7.5h11M16.5 19h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pnh0eub-m {
  d: path("M7.375 4h2.25A4.375 4.375 0 0 1 14 8.375v5.25A4.375 4.375 0 0 1 9.625 18h-2.25A4.375 4.375 0 0 1 3 13.625v-5.25A4.375 4.375 0 0 1 7.375 4");
}
</style><g class="hntgybcog"><path class="pnh0eub-m"/><path class="emvyvcb_g"/></g>`,
		"fallback": "uix:wet-dry-vacuum",
	});
}

export default Component;
