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
		"content": `<style>.ziauigb9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5H6l2.5 10h7l2.5-10h3.5m-17.75 3l1 4m15.5-4l-1 4m-9 6h3.5");
}
</style><path class="ziauigb9s"/>`,
		"fallback": "uix-sharp:window-bay-plan",
	});
}

export default Component;
