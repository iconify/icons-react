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
		"content": `<style>.qkq-kybtx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.7 16.5H2.5v-14h16v7.2m-16 2.8l16-6m-4.889 12.061l4.95-4.95l2.828 2.828l-4.95 4.95Z");
}
</style><path class="qkq-kybtx"/>`,
		"fallback": "uix-sharp:wire-removal",
	});
}

export default Component;
