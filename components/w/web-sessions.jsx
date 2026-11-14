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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hvhsg7bal {
  d: path("M6.5 7.5v-2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H18m-15.5-5H18m-12.75-2h.01m2.49 0h.01");
}

.t-e9vrbzc {
  d: path("M6 7.5h8.5A3.5 3.5 0 0 1 18 11v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17v-6A3.5 3.5 0 0 1 6 7.5");
}
</style><g class="hntgybcog"><path class="t-e9vrbzc"/><path class="hvhsg7bal"/></g>`,
		"fallback": "uix:web-sessions",
	});
}

export default Component;
