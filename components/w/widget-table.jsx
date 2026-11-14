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
		"content": `<style>.butdyac6x {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5M2.5 8.5h19M10 4.5h.01m1.99 0h.01m1.99 0h.01M10 6.5h.01m1.99 0h.01m1.99 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vn13v54yf {
  d: path("M7.75 12h8.5A1.75 1.75 0 0 1 18 13.75v3a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 6 16.75v-3A1.75 1.75 0 0 1 7.75 12M10 12v6.5m4-6.5v6.5m-8-3.25h12");
}
</style><g class="hntgybcog"><path class="butdyac6x"/><path class="vn13v54yf"/></g>`,
		"fallback": "uix:widget-table",
	});
}

export default Component;
