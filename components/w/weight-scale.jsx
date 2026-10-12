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
		"content": `<style>.g-_f_2nyh {
  d: path("M7.25 10.75a4.75 4.75 0 0 1 9.5 0Zm4.75 0l1.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zmggptbnk {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 3.5px;
}
</style><g class="hntgybcog"><rect class="zmggptbnk"/><path class="g-_f_2nyh"/></g>`,
		"fallback": "iconoven:weight-scale",
	});
}

export default Component;
