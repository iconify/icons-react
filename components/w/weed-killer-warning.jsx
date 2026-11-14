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
		"content": `<style>.awaj52bhs {
  d: path("M12 15c-2-1.5-2-4.5 0-7.5c2 3 2 6 0 7.5m0 3h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.snje5wbxt {
  d: path("m14.309 6.772l5.597 10.355A2.625 2.625 0 0 1 17.597 21H6.403a2.625 2.625 0 0 1-2.309-3.873L9.691 6.772a2.625 2.625 0 0 1 4.618 0");
}
</style><g class="hntgybcog"><path class="snje5wbxt"/><path class="awaj52bhs"/></g>`,
		"fallback": "uix:weed-killer-warning",
	});
}

export default Component;
