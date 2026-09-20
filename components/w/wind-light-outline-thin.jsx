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
		"content": `<style>.byz9m5b8d {
  d: path("M3 8h16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nx6-lsb9m {
  d: path("M5 15h16");
}
</style><g class="hntgybcog"><path class="byz9m5b8d"/><path class="nx6-lsb9m"/></g>`,
		"fallback": "iconmind:wind-light-outline-thin",
	});
}

export default Component;
