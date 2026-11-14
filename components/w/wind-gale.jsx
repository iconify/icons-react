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
		"content": `<style>.ny7nzpy8a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14 20l2.5-9M14 9a3.25 5 0 1 0 6.5 0A3.25 5 0 1 0 14 9ZM2.5 20h19M2.5 6.5H11M2.5 11h7");
}
</style><path class="ny7nzpy8a"/>`,
		"fallback": "uix-sharp:wind-gale",
	});
}

export default Component;
