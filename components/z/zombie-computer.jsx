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
		"content": `<style>.m5yvd7zgb {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8M7.75 6.75l2.5 2.5m0-2.5l-2.5 2.5m6-2.5l2.5 2.5m0-2.5l-2.5 2.5");
}

.mcmi4cctf {
  d: path("m9 13l1.5-1.25L12 13l1.5-1.25L15 13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m5yvd7zgb"/><path class="mcmi4cctf"/></g>`,
		"fallback": "uix-sharp:zombie-computer",
	});
}

export default Component;
