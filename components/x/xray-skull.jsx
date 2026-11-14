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

.k8uf4mgzd {
  fill: currentColor;
  d: path("M8.75 10.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m4 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.n1f0l6bip {
  d: path("M8.25 13.25C7 12.5 6.5 11.25 6.5 10C6.5 7 9 5 12 5s5.5 2 5.5 5c0 1.25-.5 2.5-1.75 3.25v3.25c0 .75-.5 1.25-1.25 1.25h-5c-.75 0-1.25-.5-1.25-1.25Z");
}

.ohf0s6bon {
  d: path("M7.375 2.5h9.25A4.375 4.375 0 0 1 21 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 17.125V6.875A4.375 4.375 0 0 1 7.375 2.5");
}
</style><g class="hntgybcog"><path class="ohf0s6bon"/><path class="n1f0l6bip"/><path class="k8uf4mgzd"/></g>`,
		"fallback": "uix:xray-skull",
	});
}

export default Component;
