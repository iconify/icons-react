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

.ljiu_vuhk {
  d: path("M2.5 17.5a9.5 3.5 0 0 0 19 0m-19 0a9.5 3.5 0 0 1 5-3m9 0a9.5 3.5 0 0 1 5 3M11 3h2a3.5 3.5 0 0 1 3.5 3.5V14a3.5 3.5 0 0 1-3.5 3.5h-2A3.5 3.5 0 0 1 7.5 14V6.5A3.5 3.5 0 0 1 11 3");
}

.pkf7mzb8s {
  d: path("m12.75 6.5l-2.25 4h3l-2.25 4");
}
</style><g class="hntgybcog"><path class="ljiu_vuhk"/><path class="pkf7mzb8s"/></g>`,
		"fallback": "uix:wireless-charger",
	});
}

export default Component;
