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
		"content": `<style>.d-31k0bxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h10v14H3Zm3.5 14v2.5m3-2.5v2.5m6.75-12.75a4.5 4.5 0 0 1 0 6.5m2.5-9a8 8 0 0 1 0 11.5");
}
</style><path class="d-31k0bxf"/>`,
		"fallback": "uix-sharp:wifi-extender",
	});
}

export default Component;
