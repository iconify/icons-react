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
		"content": `<style>.q11drbcno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.75h13.5v9.5H5.25zm6.75 9.5v3m-9.25 0h18.5m-16.5 0v6m14.5-6v6");
}
</style><path class="q11drbcno"/>`,
		"fallback": "iconoven:workspace-sharp",
	});
}

export default Component;
