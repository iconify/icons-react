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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.n0bsivhsr {
  fill: var(--svg-color--fff, #fff);
  d: path("m5 4l7 5.5L19 4v4.475l-4.12 3.5L19 15.49v4.5L5 8.24zm.5 1.015v3l13 10.91V15.7l-4.38-3.725L18.5 8.25V5.01L12 10.12zm3.49 7.135l2.51 2.24L5 20v-4.515zm.02.625L5.5 15.7v3.2l5.225-4.485l-1.715-1.65z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="n0bsivhsr"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:xido-background",
	});
}

export default Component;
