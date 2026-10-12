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
		"content": `<style>.c98fh-bii {
  d: path("M2.75 11.5h13.5M9.5 4.75c-1.75 1.9-2.65 4.1-2.65 6.75s.9 4.85 2.65 6.75m0-13.5c1.75 1.9 2.65 4.1 2.65 6.75s-.9 4.85-2.65 6.75M14.75 16l6.5 5.25m-3-18.5q.36 2.64 3 3q-2.64.36-3 3q-.36-2.64-3-3q2.64-.36 3-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o0_hl_u6v {
  cx: 9.5px;
  cy: 11.5px;
  r: 6.75px;
}
</style><g class="hntgybcog"><circle class="o0_hl_u6v"/><path class="c98fh-bii"/></g>`,
		"fallback": "iconoven:web-search-ai",
	});
}

export default Component;
