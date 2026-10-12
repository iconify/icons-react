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
		"content": `<style>.ymrghabbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h7.5v7.5h-7.5zm11 10h7.5v7.5h-7.5zm-7.25-2.5v6h5.75");
}
</style><path class="ymrghabbh"/>`,
		"fallback": "iconoven:workflow-sharp",
	});
}

export default Component;
