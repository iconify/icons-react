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
		"content": `<style>.hu446qb_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.75h15.5v15.5H4.25zm7.75 0v15.5M4.25 10.5h15.5m-17 10.75h18.5");
}
</style><path class="hu446qb_n"/>`,
		"fallback": "iconoven:window-view-sharp",
	});
}

export default Component;
