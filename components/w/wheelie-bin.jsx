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

.rw1ue1but {
  d: path("M7 19.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m7 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.vm1cy1wkc {
  d: path("M5.5 7.5h13l-1 10.5h-11Zm14 0L5 3.5");
}
</style><g class="hntgybcog"><path class="vm1cy1wkc"/><path class="rw1ue1but"/></g>`,
		"fallback": "uix:wheelie-bin",
	});
}

export default Component;
