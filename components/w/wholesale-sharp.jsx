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
		"content": `<style>.q22yafb9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13h7.5v5.5h-7.5zm11 0h7.5v5.5h-7.5zm-5.5-8.5h7.5V10h-7.5zM6.5 13v2.5m11-2.5v2.5M12 4.5V7M2.75 21.25h18.5");
}
</style><path class="q22yafb9d"/>`,
		"fallback": "iconoven:wholesale-sharp",
	});
}

export default Component;
