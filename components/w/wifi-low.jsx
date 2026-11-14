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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vz-v3ab4i {
  d: path("M5.99 11.49a8.5 8.5 0 0 1 12.02 0");
}

.zaqy_wb0w {
  fill: currentColor;
  d: path("M10.5 17.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="vz-v3ab4i"/><path class="zaqy_wb0w"/></g>`,
		"fallback": "uix-sharp:wifi-low",
	});
}

export default Component;
