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
		"content": `<style>.ae-e09b3w {
  d: path("M3 12h18");
}

.g6zkfnb4p {
  d: path("M6 5h4v4H6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.r3l-6sbtw {
  d: path("M14 15h4v4h-4Z");
}
</style><g class="hntgybcog"><path class="o_ssmh9ez"/><path class="ae-e09b3w"/><path class="g6zkfnb4p"/><path class="r3l-6sbtw"/></g>`,
		"fallback": "iconmind:world-map-outline-thin",
	});
}

export default Component;
