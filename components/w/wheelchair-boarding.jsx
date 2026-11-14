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

.qxqw3_bzs {
  d: path("M11.75 9.103a4.5 4.5 0 1 1-6.147 6.147M2.5 22l19-3.5");
}

.sggxjxb0v {
  d: path("M9 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M10.5 8v4H16l1.75 3.5");
}
</style><g class="hntgybcog"><path class="sggxjxb0v"/><path class="qxqw3_bzs"/></g>`,
		"fallback": "uix:wheelchair-boarding",
	});
}

export default Component;
