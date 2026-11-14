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

.kb703ac9r {
  fill: currentColor;
  d: path("M9.52 15.265za1.25 1.25 0 0 1 .215 1.755a1.25 1.25 0 0 1-1.755.215a1.25 1.25 0 0 1-.215-1.755a1.25 1.25 0 0 1 1.755-.215m-2 2.25za1.25 1.25 0 0 1 .215 1.755a1.25 1.25 0 0 1-1.755.215a1.25 1.25 0 0 1-.215-1.755a1.25 1.25 0 0 1 1.755-.215");
}

.ourri2xtl {
  d: path("m18 4.5l-13.5 17M18 4.5c.75-1.5 2.75-1.75 3.25-.25c.25.75 0 1.5-.75 2");
}
</style><g class="hntgybcog"><path class="ourri2xtl"/><path class="kb703ac9r"/></g>`,
		"fallback": "uix:white-cane",
	});
}

export default Component;
