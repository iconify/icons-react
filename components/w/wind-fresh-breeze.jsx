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
		"content": `<style>.lto_f9-mj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5h13a3 3 0 1 0-3-3m-10 8H18a3 3 0 1 1-3 3");
}
</style><path class="lto_f9-mj"/>`,
		"fallback": "uix-sharp:wind-fresh-breeze",
	});
}

export default Component;
