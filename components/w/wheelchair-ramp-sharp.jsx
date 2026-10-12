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
		"content": `<style>.wifbptbyh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 20.25h17.5V9l-.85.52L3.6 19.73l-.85.52zM5 14.75l9-5.5m-3.6-.4l3.6.4l-1.52 3.27");
}
</style><path class="wifbptbyh"/>`,
		"fallback": "iconoven:wheelchair-ramp-sharp",
	});
}

export default Component;
