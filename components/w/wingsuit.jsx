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
		"content": `<style>.r2bngfjga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM12 9l-9 .25v1.5Q8 13.5 8 21.5h1.5L12 18l2.5 3.5H16q0-8 5-10.75v-1.5Zm0 0v5.75");
}
</style><path class="r2bngfjga"/>`,
		"fallback": "uix-sharp:wingsuit",
	});
}

export default Component;
