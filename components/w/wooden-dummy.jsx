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
		"content": `<style>.mtcubr3pm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5zA2.5 2.5 0 0 1 14.5 5v14a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 19V5A2.5 2.5 0 0 1 12 2.5m4 2h3A1.5 1.5 0 0 1 20.5 6A1.5 1.5 0 0 1 19 7.5h-3A1.5 1.5 0 0 1 14.5 6A1.5 1.5 0 0 1 16 4.5M9.5 13L4 11m10.5 2l5.5-2");
}
</style><path class="mtcubr3pm"/>`,
		"fallback": "uix:wooden-dummy",
	});
}

export default Component;
