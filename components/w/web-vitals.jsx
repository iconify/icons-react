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

.lkn79kb6x {
  d: path("M6.875 4h10.25A4.375 4.375 0 0 1 21.5 8.375v7.25A4.375 4.375 0 0 1 17.125 20H6.875A4.375 4.375 0 0 1 2.5 15.625v-7.25A4.375 4.375 0 0 1 6.875 4M2.5 8.5h19m-16-2.25h.01m2.74 0h.01");
}

.vr-402b1a {
  d: path("M2.5 14.5H7l2-3.25L11.5 18l2.25-5.5l1.5 2h6.25");
}
</style><g class="hntgybcog"><path class="lkn79kb6x"/><path class="vr-402b1a"/></g>`,
		"fallback": "uix:web-vitals",
	});
}

export default Component;
