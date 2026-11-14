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
		"content": `<style>.hfq3i8_wj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 18v-3l-3-3A1.75 1.75 0 0 1 7 9.5l.5.5V5.75a1.75 1.75 0 0 1 3.5 0V4.5a1.75 1.75 0 0 1 3.5 0v1.25a1.75 1.75 0 0 1 3.5 0V18M6.5 18H19v3.5H6.5ZM11 5.75V11m3.5-5.25V11");
}
</style><path class="hfq3i8_wj"/>`,
		"fallback": "uix-sharp:wicketkeeper-gloves",
	});
}

export default Component;
