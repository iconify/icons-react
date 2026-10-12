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
		"content": `<style>.lr3sohbyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 18V9a6.25 6.25 0 0 1 12.5 0v9ZM12 2.75V18m-6.25-7.5h12.5M3.75 21.25h16.5");
}
</style><path class="lr3sohbyy"/>`,
		"fallback": "iconoven:window-arch-sharp",
	});
}

export default Component;
