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

.r36vvdbkl {
  width: 16.5px;
  height: 14.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2px;
}

.zd4pe_bzq {
  d: path("M2.75 20.5h18.5M9 6.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5.5 17.25a3.5 3.5 0 0 1 7 0m1.03-10.86a5 5 0 0 1 0 4.22m2.99-4.85a8 8 0 0 1 0 5.48");
}
</style><g class="hntgybcog"><rect class="r36vvdbkl"/><path class="zd4pe_bzq"/></g>`,
		"fallback": "iconoven:webinar",
	});
}

export default Component;
