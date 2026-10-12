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
		"content": `<style>.n5n3ywvfr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h18.5m-17 0h15.5v13H4.25zm0 4.25h15.5m-15.5 4.5h15.5m-3.25 4.25v4.5");
}
</style><path class="n5n3ywvfr"/>`,
		"fallback": "iconoven:window-blinds-sharp",
	});
}

export default Component;
