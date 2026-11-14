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

.vt7hb2b2r {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M8 9l4 6m0-6l-4 6");
}

.weq4-lo7p {
  d: path("M14.5 15V9h2a1.5 1.5 0 0 1 0 3h-2");
}
</style><g class="hntgybcog"><path class="vt7hb2b2r"/><path class="weq4-lo7p"/></g>`,
		"fallback": "uix:xp-points",
	});
}

export default Component;
