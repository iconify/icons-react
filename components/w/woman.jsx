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
		"content": `<style>.cypi79q4s {
  cx: 12px;
  cy: 9px;
  r: 3.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ppdoemb0y {
  d: path("M5 21.25h14a.75.75 0 0 0 .75-.75c0-3.2-3.5-5.5-7.75-5.5s-7.75 2.3-7.75 5.5a.75.75 0 0 0 .75.75M8.88 3.59A6.25 6.25 0 0 0 5.75 9c0 2.25.1 4 .5 5.25m8.87-10.66A6.25 6.25 0 0 1 18.25 9c0 2.25-.1 4-.5 5.25");
}
</style><g class="hntgybcog"><circle class="cypi79q4s"/><path class="ppdoemb0y"/></g>`,
		"fallback": "iconoven:woman",
	});
}

export default Component;
