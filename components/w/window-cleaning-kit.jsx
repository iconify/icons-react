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
		"content": `<style>.oljckbbce {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10h16l-1.5 11h-13Zm.5 3.5h15M8 3h8m-4 0v7");
}
</style><path class="oljckbbce"/>`,
		"fallback": "uix-sharp:window-cleaning-kit",
	});
}

export default Component;
