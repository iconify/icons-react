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
		"content": `<style>.bv-r4kbhd {
  d: path("m7.581 9.206l.47-.171a1.75 1.75 0 0 1 2.243 1.046l.171.47a1.75 1.75 0 0 1-1.046 2.243l-.47.171a1.75 1.75 0 0 1-2.243-1.046l-.171-.47a1.75 1.75 0 0 1 1.046-2.243m7.77-2.219l.492.087a1.75 1.75 0 0 1 1.42 2.027l-.087.492a1.75 1.75 0 0 1-2.027 1.42l-.492-.087a1.75 1.75 0 0 1-1.42-2.027l.087-.492a1.75 1.75 0 0 1 2.027-1.42");
}

.ck38ppfsa {
  d: path("M2.5 4h19l-1.75 15q-.25 2-2.25 2h-11q-2 0-2.25-2ZM4 16.25h16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ck38ppfsa"/><path class="bv-r4kbhd"/></g>`,
		"fallback": "uix:whisky-on-the-rocks",
	});
}

export default Component;
