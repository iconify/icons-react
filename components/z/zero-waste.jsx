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
		"content": `<style>.gf18i6bqa {
  d: path("M12 10.5c1.5 0 2.25 1.4 2.25 3.6s-.75 3.65-2.25 3.65s-2.25-1.45-2.25-3.65s.75-3.6 2.25-3.6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vfac8le9e {
  d: path("M6.5 7.75h11q1.5 0 1.36 1.49l-.97 10.52q-.14 1.49-1.64 1.49h-8.5q-1.5 0-1.64-1.49L5.14 9.24Q5 7.75 6.5 7.75m-3.25-2.5h17.5m-11 0v-2.5h4.5v2.5");
}
</style><g class="hntgybcog"><path class="vfac8le9e"/><path class="gf18i6bqa"/></g>`,
		"fallback": "iconoven:zero-waste",
	});
}

export default Component;
