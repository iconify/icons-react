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
		"content": `<style>.rur5syr8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 16V9.5C11 6.75 12.75 5 15 5s3.75 1.75 3.5 4.25m0 0C20.75 10 21.5 12 20 14c-2-.75-2.75-2.75-1.5-4.75ZM11 10c-2.25-.25-4 .75-4.75 3c2.25.25 4-.75 4.75-3Zm-5.5 6h11l-1.15 4.35l-.263.9H6.913l-.263-.9Z");
}
</style><path class="rur5syr8j"/>`,
		"fallback": "iconoven:wilted-plant-sharp",
	});
}

export default Component;
