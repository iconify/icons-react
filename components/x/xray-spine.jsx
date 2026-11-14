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

.luf42usuo {
  d: path("M8.75 6L10 5.25h4l1.25.75m-6.5 3.25L10 8.5h4l1.25.75m-6.5 3.25l1.25-.75h4l1.25.75m-6.5 3.25L10 15h4l1.25.75M8.75 19l1.25-.75h4l1.25.75");
}

.ohf0s6bon {
  d: path("M7.375 2.5h9.25A4.375 4.375 0 0 1 21 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 17.125V6.875A4.375 4.375 0 0 1 7.375 2.5");
}
</style><g class="hntgybcog"><path class="ohf0s6bon"/><path class="luf42usuo"/></g>`,
		"fallback": "uix:xray-spine",
	});
}

export default Component;
