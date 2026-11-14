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
		"content": `<style>.qtbr_bb6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h5v19h-5Zm5 2h6v3h-6Zm-5 8.5L4 11m10.5 2l5.5-2");
}
</style><path class="qtbr_bb6x"/>`,
		"fallback": "uix-sharp:wooden-dummy",
	});
}

export default Component;
