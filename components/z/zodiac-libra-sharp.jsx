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
		"content": `<style>.nrtw_jtky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 15.75h5a4 4 0 1 1 6.5 0h5m-16.5 4.5h16.5");
}
</style><path class="nrtw_jtky"/>`,
		"fallback": "iconoven:zodiac-libra-sharp",
	});
}

export default Component;
