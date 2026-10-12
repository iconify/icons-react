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
		"content": `<style>.iblq6ibxu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.75h3V6h-3zM8.75 6H16l-.13.74l-.49 2.77l-.13.74h-6.5l-.13-.74l-.49-2.77L8 6zm0 4.25v11m6.5-11v11M8.75 13H11m4.25 2.25H13M8.75 17.5H11m4.25 2.25H13");
}
</style><path class="iblq6ibxu"/>`,
		"fallback": "iconoven:zipper-sharp",
	});
}

export default Component;
