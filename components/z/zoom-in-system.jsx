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
		"content": `<style>.v5yzizb2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.9 15H2.5V3h17v7.4M7 15v4m-3 0h6m2.5-2.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm7 3l2 2m-6.25-5h2.5m-1.25-1.25v2.5");
}
</style><path class="v5yzizb2b"/>`,
		"fallback": "uix-sharp:zoom-in-system",
	});
}

export default Component;
