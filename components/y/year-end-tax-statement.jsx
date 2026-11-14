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
		"content": `<style>.bgotw-ofq {
  d: path("M8 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-4 .5l6-7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u18_l1bej {
  d: path("M5 2.5h14v19L17 20l-2 1.5l-2-1.5l-2 1.5L9 20l-2 1.5L5 20Z");
}
</style><g class="hntgybcog"><path class="u18_l1bej"/><path class="bgotw-ofq"/></g>`,
		"fallback": "uix:year-end-tax-statement",
	});
}

export default Component;
