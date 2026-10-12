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
		"content": `<style>.fj3s-0b6o {
  d: path("M8 11h6m-3-3v6m5.5 2.5L21 21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ry59zbcad {
  cx: 11px;
  cy: 11px;
  r: 7.25px;
}
</style><g class="hntgybcog"><circle class="ry59zbcad"/><path class="fj3s-0b6o"/></g>`,
		"fallback": "iconoven:zoom-in",
	});
}

export default Component;
