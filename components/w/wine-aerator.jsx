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
		"content": `<style>.px9yqbhtz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10l-3.75 4v1.5h-2.5V7Zm0 8.25h10q0 6.25-5 6.25t-5-6.25Zm5 6.25v3.75m-3 0h6");
}
</style><path class="px9yqbhtz"/>`,
		"fallback": "uix-sharp:wine-aerator",
	});
}

export default Component;
