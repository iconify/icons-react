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

.ci8tqvbtg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 11.75h.01m5.99 0h.01");
}

.j0olhkbdq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 6.25l4-1.231l4 1.231M9 8.5l3-.9l3 .9");
}

.qmc09dbrm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 11.25l-1 .5M6 13l-1-.25m13-1.5l1 .5M18 13l1-.25M9.5 16.5l2.5 1.563l2.5-1.563");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="c6vt1lbds"/><path class="j0olhkbdq"/><path class="ci8tqvbtg"/><path class="qmc09dbrm"/></g>`,
		"fallback": "iconoven:wrinkle-face-sharp",
	});
}

export default Component;
