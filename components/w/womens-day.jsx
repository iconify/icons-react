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

.o5us-7b8x {
  d: path("M12 11.5S9.5 10 9.5 8.25c0-.75.6-1.25 1.25-1.25c.5 0 .95.3 1.25.75c.3-.45.75-.75 1.25-.75c.65 0 1.25.5 1.25 1.25C14.5 10 12 11.5 12 11.5");
}

.q20wgjbxv {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m6.5 6.5v6m-3-3h6");
}
</style><g class="hntgybcog"><path class="q20wgjbxv"/><path class="o5us-7b8x"/></g>`,
		"fallback": "uix:womens-day",
	});
}

export default Component;
