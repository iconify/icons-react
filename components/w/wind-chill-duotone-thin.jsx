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
		"content": `<style>.filuri95n {
  d: path("M8 4v8m-4 0 8 -8");
}

.g7rxpleju {
  d: path("M4 20h14");
}

.h8x8ptj-p {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 16h11a3 3 0 1 1 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ll4cdbb5a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p9fnnqwai {
  d: path("M4 16h11a3 3 0 1 1 -3 3");
}

.qe5nt38fb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 4v8m-4 0 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="qe5nt38fb"/><path class="h8x8ptj-p"/><path class="ll4cdbb5a"/><path class="filuri95n"/><path class="p9fnnqwai"/><path class="g7rxpleju"/></g>`,
		"fallback": "iconmind:wind-chill-duotone-thin",
	});
}

export default Component;
