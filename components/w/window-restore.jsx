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
		"content": `<style>.e-elj4a7k {
  d: path("M6.5 8V6A2.5 2.5 0 0 1 9 3.5h10A2.5 2.5 0 0 1 21.5 6v8a2.5 2.5 0 0 1-2.5 2.5h-3M2.5 12H16");
}

.f5qmfwbyu {
  d: path("M6.875 8h4.75A4.375 4.375 0 0 1 16 12.375v3.75a4.375 4.375 0 0 1-4.375 4.375h-4.75A4.375 4.375 0 0 1 2.5 16.125v-3.75A4.375 4.375 0 0 1 6.875 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f5qmfwbyu"/><path class="e-elj4a7k"/></g>`,
		"fallback": "uix:window-restore",
	});
}

export default Component;
