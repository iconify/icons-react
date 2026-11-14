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
		"content": `<style>.frxpk9bir {
  d: path("M2.5 6h16v15.5h-16ZM8 16.5l5-5");
}

.gfyytm2ae {
  d: path("M13 11.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.l4pzhdajg {
  d: path("M7 6V3.5a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1h-2");
}

.m-vh27u2c {
  d: path("M6.75 17.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5-7.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.mlhsr0b7n {
  d: path("M5.5 16.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l4pzhdajg"/><path class="frxpk9bir"/><path class="mlhsr0b7n"/><path class="m-vh27u2c"/><path class="gfyytm2ae"/></g>`,
		"fallback": "uix-sharp:xray-film",
	});
}

export default Component;
