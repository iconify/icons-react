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

.e6n426but {
  fill: currentColor;
  d: path("M6 5h4v4H6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.g6zkfnb4p {
  d: path("M6 5h4v4H6Z");
}

.gq2c-3b3p {
  fill: currentColor;
  d: path("M14 15h4v4h-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.r3l-6sbtw {
  d: path("M14 15h4v4h-4Z");
}

.zhy5nnbig {
  fill: currentColor;
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="zhy5nnbig"/><path class="e6n426but"/><path class="gq2c-3b3p"/><path class="o_ssmh9ez"/><path class="ae-e09b3w"/><path class="g6zkfnb4p"/><path class="r3l-6sbtw"/></g>`,
		"fallback": "iconmind:world-map-duotone-regular",
	});
}

export default Component;
