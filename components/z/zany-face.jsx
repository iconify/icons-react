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

.ff4_kphtr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 14h8.5m-3.75 0H16v2.5a1.75 1.75 0 0 1-3.5 0Z");
}

.h9hqwcbuo {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.5 9.5h.01");
}

.qz6997bxv {
  cx: 8.75px;
  cy: 9px;
  r: 1.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="c6vt1lbds"/><circle class="qz6997bxv"/><path class="h9hqwcbuo"/><path class="ff4_kphtr"/></g>`,
		"fallback": "iconoven:zany-face",
	});
}

export default Component;
