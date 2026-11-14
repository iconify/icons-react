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

.rtu8b9byv {
  d: path("M9 10.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.wdr0qjxed {
  d: path("M3 13.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}
</style><g class="hntgybcog"><path class="wdr0qjxed"/><path class="rtu8b9byv"/></g>`,
		"fallback": "uix:wedding-rings",
	});
}

export default Component;
