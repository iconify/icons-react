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
		"content": `<style>.paxt1-bhu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 3.75v5m-5.5.5L9 10l3-.5l3 .5l2.5 4m-12 2.5c2.5-1.75 10.5-1.75 13 0M2.5 19h19v2.5h-19Z");
}
</style><path class="paxt1-bhu"/>`,
		"fallback": "uix-sharp:yoga-deck",
	});
}

export default Component;
