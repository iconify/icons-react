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
		"content": `<style>.embitybap {
  d: path("M6.16 16.34L17.5 5m0 0l3.54 1.41m-6.01 1.06l3.54 1.41");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5w4u_bzm {
  cx: 4.75px;
  cy: 17.75px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="x5w4u_bzm"/><path class="embitybap"/></g>`,
		"fallback": "iconoven:wind-direction",
	});
}

export default Component;
