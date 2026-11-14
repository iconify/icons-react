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

.uqrvp6bwh {
  d: path("M11.75 12.603a4.5 4.5 0 1 1-4.5 0M9.5 10H14m7.5-7v18");
}

.v3l-sbcfe {
  d: path("M7.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 3.5v5.5h6L18 19");
}
</style><g class="hntgybcog"><path class="v3l-sbcfe"/><path class="uqrvp6bwh"/></g>`,
		"fallback": "uix:wheelchair-accessible-entrance",
	});
}

export default Component;
