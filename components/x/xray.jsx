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

.mk_q18rca {
  d: path("M7.75 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.ohf0s6bon {
  d: path("M7.375 2.5h9.25A4.375 4.375 0 0 1 21 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 17.125V6.875A4.375 4.375 0 0 1 7.375 2.5");
}

.v818-tbmw {
  d: path("M15 14.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M9.5 9.5l5 5");
}

.ysbi_bcqw {
  d: path("M6 9.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="ohf0s6bon"/><path class="ysbi_bcqw"/><path class="mk_q18rca"/><path class="v818-tbmw"/></g>`,
		"fallback": "uix:xray",
	});
}

export default Component;
