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
		"content": `<style>.u01gepz4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19m-3.25-3l3.25 3l-3.25 3M2.5 11H16a3 3 0 1 1-3 3M2.5 16h6a2.75 2.75 0 1 1-2.75 2.75");
}
</style><path class="u01gepz4s"/>`,
		"fallback": "uix-sharp:wind-east",
	});
}

export default Component;
