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
		"content": `<style>.mogui5bsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21.25V2.75m0 1l15 2q1 .13 1 1.14v1.22q0 1.01-1 1.14l-15 2Zm5 .75v6m5-5.25v4.5");
}
</style><path class="mogui5bsh"/>`,
		"fallback": "iconoven:windsock",
	});
}

export default Component;
