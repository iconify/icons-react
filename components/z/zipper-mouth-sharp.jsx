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
		"content": `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q54bstbmy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 9h.01M15 9h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xufeu2b_t {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 12.75l1.5 1.5l1.5-1.5l1.5 1.5l1.5-1.5l1.5 1.5l1.5-1.5h.65");
}

.z2ma-2b8r {
  cx: 16.9px;
  cy: 12.75px;
  r: 1.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><circle class="c6vt1lbds"/><path class="q54bstbmy"/><path class="xufeu2b_t"/><circle class="z2ma-2b8r"/></g>`,
		"fallback": "iconoven:zipper-mouth-sharp",
	});
}

export default Component;
