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
		"content": `<style>.bkbvxeb5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 18c0-3 1.6-5.25 3.75-5.25S15.75 15 15.75 18Zm1-9.25v-1.5h5.5v3h-5.5zM2.75 18h18.5m-15.5 0a6.5 6.5 0 0 1 .5-2.5m-3 2.5a9 9 0 0 1 .7-3.5m13.8 1a6.5 6.5 0 0 1 .5 2.5m1.8-3.5a9 9 0 0 1 .7 3.5m-18 2.75l2.33-.902l2.3.902l2.302.903L12 20.75l2.31-.9l2.31.9l2.308.899l2.322-.899");
}
</style><path class="bkbvxeb5v"/>`,
		"fallback": "iconoven:zen-stones-sharp",
	});
}

export default Component;
