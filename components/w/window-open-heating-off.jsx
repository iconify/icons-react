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
		"content": `<style>.vc5iqvyyw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h12v12h-12Zm12.219 11.865l-.219.135v-12l3.25 1.75v8.009M8.5 2.5v12m-6-6h6m10 6.75c1.5 1.25 2.75 2.5 2.75 3.75a2.75 2.75 0 0 1-5.5 0c0-1.25 1.25-2.5 2.75-3.75Zm-2 1.25l5 5");
}
</style><path class="vc5iqvyyw"/>`,
		"fallback": "uix-sharp:window-open-heating-off",
	});
}

export default Component;
