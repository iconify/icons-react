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

.iqnqxwbgv {
  d: path("m7.5 10 2.5 2.5");
}

.lzyo_l7yh {
  d: path("m14.5 9 3 3");
}

.uobwinb1c {
  d: path("M2 7.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.urzylvb1v {
  d: path("M9 14.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.xbfxmobjr {
  d: path("M16 7.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.yc7uj-bdi {
  d: path("M16.5 10 14 12.5");
}
</style><g class="hntgybcog"><path class="uobwinb1c"/><path class="xbfxmobjr"/><path class="urzylvb1v"/><path class="iqnqxwbgv"/><path class="yc7uj-bdi"/><path class="lzyo_l7yh"/></g>`,
		"fallback": "iconmind:weight-prune-outline-thin",
	});
}

export default Component;
