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
		"content": `<style>.g51vexztm {
  d: path("M9.5 2.75h5M9.17 14.16l3.89-3.89a1.6 1.6 0 1 1 2.58-.81a1.6 1.6 0 1 1-.81 2.58l-3.89 3.89a1.6 1.6 0 1 1-2.58.81a1.6 1.6 0 1 1 .81-2.58");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tj3aa_bgi {
  width: 16.5px;
  height: 16.25px;
  x: 3.75px;
  y: 5px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="tj3aa_bgi"/><path class="g51vexztm"/></g>`,
		"fallback": "iconoven:x-ray-film",
	});
}

export default Component;
