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
		"content": `<style>.r331aww0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.32 16.26l2.61-2.27l.57-.49l.57.49l2.61 2.27l.57.49h-7.5zm1.68.49v4.5m3-4.5v4.5m-5.25 0h7.5m4.07-15.74l2.61-2.27l.57-.49l.57.49l2.61 2.27l.57.49h-7.5zM16 6v4.5M19 6v4.5m-5.25 0h7.5m-14.75 0l4.25-4.25m-3 0h3v3");
}
</style><path class="r331aww0w"/>`,
		"fallback": "iconoven:wire-transfer-sharp",
	});
}

export default Component;
