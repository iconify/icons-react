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

.kqlqbrobv {
  d: path("M2.5 20.5V9L12 3.5L21.5 9v11.5Z");
}

.t1bu7lv4x {
  d: path("M8.5 16.5h2A1.5 1.5 0 0 1 12 18v1a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 7 19v-1a1.5 1.5 0 0 1 1.5-1.5m5 0h2A1.5 1.5 0 0 1 17 18v1a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 12 19v-1a1.5 1.5 0 0 1 1.5-1.5m-2.5-4h2a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9.5 15v-1a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="kqlqbrobv"/><path class="t1bu7lv4x"/></g>`,
		"fallback": "uix:wholesale-market",
	});
}

export default Component;
