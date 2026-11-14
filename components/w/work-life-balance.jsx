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
		"content": `<style>.ue_-v-v9j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 14l3 7H9Zm-9.5 0h19m-18-6.5h6V12h-6Zm-1 6.5l1-2h6l1 2m4 0c0-4.5 3-7 7-7c0 4-3 7-7 7Zm0 0L19 9.5");
}
</style><path class="ue_-v-v9j"/>`,
		"fallback": "uix-sharp:work-life-balance",
	});
}

export default Component;
