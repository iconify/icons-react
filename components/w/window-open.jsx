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
		"content": `<style>.vlrix3bae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h15v15h-15Zm15 0l4 2.5v10l-4 2.5Zm-7.5 0v15M2.5 12H10");
}
</style><path class="vlrix3bae"/>`,
		"fallback": "uix-sharp:window-open",
	});
}

export default Component;
