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
		"content": `<style>.hcn6dfnxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5h5v14H7Zm-.75-2h6.5v2h-6.5Zm5.75 4h5v2m-9.5-6L3 2.5m1.5 19h10m2.5-8c1 1.5 1.5 2.25 1.5 3a1.5 1.5 0 0 1-3 0c0-.75.5-1.5 1.5-3Z");
}
</style><path class="hcn6dfnxw"/>`,
		"fallback": "uix-sharp:well-water",
	});
}

export default Component;
