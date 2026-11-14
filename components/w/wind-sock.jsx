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
		"content": `<style>.x2dfwybyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3v18.5M4 7a1.5 3.5 0 1 0 3 0a1.5 3.5 0 1 0-3 0Zm1.5-3.5l14 5m-14 2l14 2m-7-6.5v5.5");
}
</style><path class="x2dfwybyj"/>`,
		"fallback": "uix-sharp:wind-sock",
	});
}

export default Component;
