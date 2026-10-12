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
		"content": `<style>.fiihs3-8t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 5.25h16.5v15H3.75zm0 4.75h16.5M8 2.75v4.5m8-4.5v4.5");
}

.jkhrdfe1b {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 12.75h3.5v5h-3.5z");
}

.ppze8gbqr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 15.25h.01m3.49 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="fiihs3-8t"/><path class="ppze8gbqr"/><path class="jkhrdfe1b"/></g>`,
		"fallback": "iconoven:weekend-sharp",
	});
}

export default Component;
