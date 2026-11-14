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
		"content": `<style>.u1dycy1bh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm11.25 4.75l5.75 5.75M10 10h.01");
}
</style><path class="u1dycy1bh"/>`,
		"fallback": "uix-sharp:zoom-in-sample",
	});
}

export default Component;
