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
		"content": `<style>.bcerlib1k {
  width: 7.5px;
  height: 7.5px;
  x: 2.75px;
  y: 3.25px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ibcuioctl {
  width: 7.5px;
  height: 7.5px;
  x: 13.75px;
  y: 13.25px;
  rx: 2px;
}

.uv87ohrmq {
  d: path("M6.5 10.75v3.5a2.5 2.5 0 0 0 2.5 2.5h3.25");
}
</style><g class="hntgybcog"><rect class="bcerlib1k"/><rect class="ibcuioctl"/><path class="uv87ohrmq"/></g>`,
		"fallback": "iconoven:workflow",
	});
}

export default Component;
