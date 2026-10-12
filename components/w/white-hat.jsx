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

.rk7rft3-j {
  d: path("M6.25 8.25C10 9 14 9 17.75 8.25M8.5 18.5L11 21l4.75-4.75");
}

.u6ie11bfa {
  d: path("M2.75 11.75c0-.8 1.6-1.4 3.5-1.65V6.75c0-2.2 2.3-4 5.75-4s5.75 1.8 5.75 4v3.35c1.9.25 3.5.85 3.5 1.65c0 1.1-4.15 2-9.25 2s-9.25-.9-9.25-2");
}
</style><g class="hntgybcog"><path class="u6ie11bfa"/><path class="rk7rft3-j"/></g>`,
		"fallback": "iconoven:white-hat",
	});
}

export default Component;
