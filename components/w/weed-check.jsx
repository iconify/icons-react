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
		"content": `<style>.rhtynqbgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 6a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM10 9.25V21.5m0-2.5l-4.5-1.5L7 16l-3.5-2.25h4L10 16m0-1l3-1.25l-1-1.25l3.5-1.25l-1.5 3L10 17m4.75 1l2 2L21 15.75");
}
</style><path class="rhtynqbgi"/>`,
		"fallback": "uix-sharp:weed-check",
	});
}

export default Component;
