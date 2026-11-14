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

.mwxkc6-pd {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h12.5M12 9h2.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75H12a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 12 9m-.25 0V7.5a1.5 1.5 0 0 1 3 0V9");
}

.n13x6dbmu {
  d: path("M4.5 19V5A2.5 2.5 0 0 1 7 2.5h12.5v19H7A2.5 2.5 0 0 1 4.5 19");
}
</style><g class="hntgybcog"><path class="n13x6dbmu"/><path class="mwxkc6-pd"/></g>`,
		"fallback": "uix:year-end-close",
	});
}

export default Component;
