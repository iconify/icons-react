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
		"content": `<style>.v5rp9sbzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18v3H3Zm3 3v7m12-7v7M4 21h4m8 0h4M5.5 3.5h3v5h-3Zm10 0h3v5h-3ZM8.5 6h7");
}
</style><path class="v5rp9sbzg"/>`,
		"fallback": "uix-sharp:weight-bench",
	});
}

export default Component;
