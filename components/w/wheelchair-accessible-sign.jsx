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
		"content": `<style>.hc65eyyru {
  d: path("M9.625 3.5h4.75A6.125 6.125 0 0 1 20.5 9.625v4.75a6.125 6.125 0 0 1-6.125 6.125h-4.75A6.125 6.125 0 0 1 3.5 14.375v-4.75A6.125 6.125 0 0 1 9.625 3.5M11 6.75h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mzqq73dgo {
  d: path("M14.289 13.303a3.5 3.5 0 1 1-6.578 0");
}

.s84kxntrd {
  d: path("M11 9v3h3.5l1.5 4");
}
</style><g class="hntgybcog"><path class="hc65eyyru"/><path class="s84kxntrd"/><path class="mzqq73dgo"/></g>`,
		"fallback": "uix:wheelchair-accessible-sign",
	});
}

export default Component;
