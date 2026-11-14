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
		"content": `<style>.bv3bnf2bs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-7 5.5h19m-12.75 11v-7.75a3.25 3.25 0 0 1 6.5 0v7.75m-11-11v3m-1.75 1a1 1 0 0 1 1-1H5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1Zm17.25-4v3m-1.75 1a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H19a1 1 0 0 1-1-1Z");
}
</style><path class="bv3bnf2bs"/>`,
		"fallback": "uix:yoke-carry",
	});
}

export default Component;
