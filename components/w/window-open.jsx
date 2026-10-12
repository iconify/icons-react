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
		"content": `<style>.bmfs55blw {
  width: 15.5px;
  height: 15.5px;
  x: 4.25px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jc14q0f8u {
  d: path("M12 2.75v15.5M4.25 10.5h15.5m-17 10.75h18.5");
}
</style><g class="hntgybcog"><rect class="bmfs55blw"/><path class="jc14q0f8u"/></g>`,
		"fallback": "iconoven:window-open",
	});
}

export default Component;
