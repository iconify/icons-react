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
		"content": `<style>.s-v_wsbuo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h7V10c0 1.75 1.5 2.75 3.5 3.25l4 1c1.75.5 2.5 1.75 2.5 3.75h-18ZM3.5 18h18v3.5h-18Z");
}
</style><path class="s-v_wsbuo"/>`,
		"fallback": "uix-sharp:wrestling-shoes",
	});
}

export default Component;
