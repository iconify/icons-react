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
		"content": `<style>.fvernjo8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12.5h17m-8.5 0v3m-7.5 0h15v6h-15ZM12 5.75c-1.25-1-4.75-1-4.75 2.5c0 2.5 1.75 4.25 3.25 4.25h3c1.5 0 3.25-1.75 3.25-4.25c0-3.5-3.5-3.5-4.75-2.5Zm0 0L13 3");
}
</style><path class="fvernjo8b"/>`,
		"fallback": "uix-sharp:weigh-your-own",
	});
}

export default Component;
