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
		"content": `<style>.r2mgvi-0b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19m-13-3.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M12 13v4.5");
}
</style><path class="r2mgvi-0b"/>`,
		"fallback": "uix:zero-point",
	});
}

export default Component;
