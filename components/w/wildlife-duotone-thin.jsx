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
		"content": `<style>.aff9hemvj {
  d: path("M9 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.gl2wyfu4j {
  fill: currentColor;
  d: path("M14 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.keqc2pbxm {
  d: path("M4 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.m3bn7sb5q {
  fill: currentColor;
  d: path("M9 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.q686vz2zk {
  d: path("M14 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rf8vvjmma {
  fill: currentColor;
  d: path("M6 17a5.5 5.5 0 0 1 11 0 4.5 4.5 0 0 1 -5.5 4A4.5 4.5 0 0 1 6 17");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rvz2lnbll {
  fill: currentColor;
  d: path("M4 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.svx7-715v {
  d: path("M6 17a5.5 5.5 0 0 1 11 0 4.5 4.5 0 0 1 -5.5 4A4.5 4.5 0 0 1 6 17");
}
</style><g class="hntgybcog"><path class="rvz2lnbll"/><path class="m3bn7sb5q"/><path class="gl2wyfu4j"/><path class="rf8vvjmma"/><path class="keqc2pbxm"/><path class="aff9hemvj"/><path class="q686vz2zk"/><path class="svx7-715v"/></g>`,
		"fallback": "iconmind:wildlife-duotone-thin",
	});
}

export default Component;
