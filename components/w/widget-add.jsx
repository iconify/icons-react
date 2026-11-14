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
		"content": `<style>.lcausob3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h7.5v7.5H3Zm10.5 3.75a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM3 13.5h7.5V21H3ZM18 15v6m-3-3h6");
}
</style><path class="lcausob3a"/>`,
		"fallback": "uix-sharp:widget-add",
	});
}

export default Component;
