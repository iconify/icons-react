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
		"content": `<style>.jss5sobca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5H18V18H2.5Zm0 6H18M7.5 4.25h.01m2.74 0h.01m2.74 0h.01M7.5 6.75h.01m2.74 0h.01m2.74 0h.01m.49 6.75l8 8m-4.75 0h4.75v-4.75");
}
</style><path class="jss5sobca"/>`,
		"fallback": "uix-sharp:widget-resize",
	});
}

export default Component;
