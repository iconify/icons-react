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

.onilsub5r {
  d: path("m6.473 12.135l2.554-.957a1.5 1.5 0 0 1 .957-.033l4.032 1.21a1.5 1.5 0 0 0 .957-.033l1.527-.572a1.48 1.48 0 0 1 2 1.386v3.324a1.5 1.5 0 0 1-.973 1.405l-2.554.957a1.5 1.5 0 0 1-.957.033l-4.032-1.21a1.5 1.5 0 0 0-.957.033L7.5 18.25a1.48 1.48 0 0 1-2-1.386V13.54a1.5 1.5 0 0 1 .973-1.405M9.5 11v6.5m5-5V19");
}
</style><g class="hntgybcog"><path class="butdyac6x"/><path class="onilsub5r"/></g>`,
		"fallback": "uix:widget-map",
	});
}

export default Component;
