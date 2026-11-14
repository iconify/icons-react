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
		"content": `<style>.lpi__ebqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm12 5l5 5m-10-13v6m-3-3h6");
}
</style><path class="lpi__ebqy"/>`,
		"fallback": "uix-sharp:zoom-in",
	});
}

export default Component;
