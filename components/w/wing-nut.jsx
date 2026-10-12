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

.r6ojtsb1s {
  d: path("m13.52 3.63l4.97 2.87q1.52.88 1.52 2.63v5.75q0 1.75-1.52 2.62l-4.97 2.88q-1.52.87-3.04 0L5.51 17.5q-1.52-.87-1.52-2.62V9.12q0-1.75 1.52-2.62l4.97-2.88q1.52-.87 3.04.01");
}

.wtruwobgh {
  d: path("M15.75 12a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 1 1 7.5 0");
}
</style><g class="hntgybcog"><path class="r6ojtsb1s"/><path class="wtruwobgh"/></g>`,
		"fallback": "iconoven:wing-nut",
	});
}

export default Component;
