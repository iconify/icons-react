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
		"content": `<style>.daa7eab3q {
  d: path("M10.5 17.75a1.5 3.75 0 1 0 3 0a1.5 3.75 0 1 0-3 0m-2.25 0h7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r5al68qzw {
  d: path("M12 2.5za2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2m-5.25 6h10.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 11H6.75A1.25 1.25 0 0 1 5.5 9.75A1.25 1.25 0 0 1 6.75 8.5m1.5 9.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}
</style><g class="hntgybcog"><path class="r5al68qzw"/><path class="daa7eab3q"/></g>`,
		"fallback": "uix:work-permit",
	});
}

export default Component;
