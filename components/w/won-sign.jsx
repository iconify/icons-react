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
		"content": `<style>.bly8u9bsx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 4.5l4 15L12 6l5 13.5l4-15M3 11h18");
}
</style><path class="bly8u9bsx"/>`,
		"fallback": "uix-sharp:won-sign",
	});
}

export default Component;
