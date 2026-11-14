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
		"content": `<style>.uepo86nlv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 2.5L4.5 13H10l-1.5 8L16 10h-5.5ZM14.75 18l2 2L21 15.75");
}
</style><path class="uepo86nlv"/>`,
		"fallback": "uix-sharp:zero-energy",
	});
}

export default Component;
