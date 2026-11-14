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
		"content": `<style>.igmedib3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.924 4.072l10.271 2.183l-3.119 14.673l-10.271-2.183ZM19.5 4.5l2-1.5M20 8.25l2 .5");
}
</style><path class="igmedib3f"/>`,
		"fallback": "uix-sharp:yellow-card",
	});
}

export default Component;
