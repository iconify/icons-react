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
		"content": `<style>.z7bqdjmlg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 3.25h7v7h-7zm0 2.75h7m3.5-2.75h7v7h-7zm0 2.75h7m-17.5 7.75h7v7h-7zm0 2.75h7m3.5-2.75h7v7h-7zm0 2.75h7");
}
</style><path class="z7bqdjmlg"/>`,
		"fallback": "iconoven:year-view-sharp",
	});
}

export default Component;
