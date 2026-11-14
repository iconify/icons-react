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
		"content": `<style>.dufn4fbfs {
  d: path("m6 2.75l2.25 1l-1 2.25");
}

.duhyygb3r {
  d: path("M6 11.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0m8.75 3.75L18.5 19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vlqtoyr9h {
  d: path("M8.178 19.252a8.25 8.25 0 0 1 0-15.504");
}
</style><g class="hntgybcog"><path class="duhyygb3r"/><path class="vlqtoyr9h"/><path class="dufn4fbfs"/></g>`,
		"fallback": "uix:zoom-reset",
	});
}

export default Component;
