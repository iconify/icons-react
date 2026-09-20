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
		"content": `<style>.m1v1ebb5g {
  d: path("M3 16a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.mtwnxab5w {
  d: path("M8 3v6h7v4h4");
}

.rynjb5q0q {
  d: path("M7 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="m1v1ebb5g"/><path class="rynjb5q0q"/><path class="mtwnxab5w"/></g>`,
		"fallback": "iconmind:wheelchair-outline-bold",
	});
}

export default Component;
