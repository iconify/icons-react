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
		"content": `<style>.bkffo7b1e {
  d: path("M6 2.5h12m-6 0V6M9.75 8.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ksstlkr8f {
  d: path("M10.242 10.5h3.516a1.75 1.75 0 0 1 1.652 1.172l2.275 6.5a1.75 1.75 0 0 1-1.652 2.328H7.967a1.75 1.75 0 0 1-1.652-2.328l2.275-6.5a1.75 1.75 0 0 1 1.652-1.172");
}
</style><g class="hntgybcog"><path class="bkffo7b1e"/><path class="ksstlkr8f"/></g>`,
		"fallback": "uix:weight-hanging",
	});
}

export default Component;
