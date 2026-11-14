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
		"content": `<style>.j3_laxbzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.8 15.75H4v-8.5h14v4.7m-15.5 6.8H12M8 4.25a4.5 4.5 0 0 1 6 0M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm1-2.25l4.5 4.5");
}
</style><path class="j3_laxbzz"/>`,
		"fallback": "uix-sharp:wifi-block-device",
	});
}

export default Component;
