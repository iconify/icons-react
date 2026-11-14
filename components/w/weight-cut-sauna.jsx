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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j04o-pb8z {
  d: path("M6.75 5c0 3.25 5 3.25 5 0m-4.5 11.75l1-2.75h2l1 2.75m5.25 4.75q-1.875-1.5 0-3t0-3m2.5 6q-1.875-1.5 0-3t0-3m2.5 6q-1.875-1.5 0-3c.5-.5.5-2 0-3");
}

.qr_ji_biv {
  d: path("M13.5 17.685V12.5H16v-4c0-1.25-.75-2-1.75-2.5l-2.5-1c0-3.25-5-3.25-5 0l-2.5 1c-1 .5-1.75 1.25-1.75 2.5v4H5v7h7.815");
}
</style><g class="hntgybcog"><path class="qr_ji_biv"/><path class="j04o-pb8z"/></g>`,
		"fallback": "uix:weight-cut-sauna",
	});
}

export default Component;
