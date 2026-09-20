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
		"content": `<style>.ecxgw5evs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 21c0 -6 -1 -12 -2 -12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hme2y-bmh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 21c0 -6 2 -12 6 -12s6 6 6 12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hx7cfzbbm {
  d: path("M6 21c0 -6 2 -12 6 -12s6 6 6 12");
}

.l6rp-_-ny {
  d: path("M10 21c0 -6 1 -12 2 -12");
}

.m471kbbab {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 2v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mww7ccc2b {
  d: path("M14 21c0 -6 -1 -12 -2 -12");
}

.z_j864liq {
  d: path("M12 2v7");
}

.zhy6yeb4j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 21c0 -6 1 -12 2 -12");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="m471kbbab"/><path class="hme2y-bmh"/><path class="zhy6yeb4j"/><path class="ecxgw5evs"/><path class="z_j864liq"/><path class="hx7cfzbbm"/><path class="l6rp-_-ny"/><path class="mww7ccc2b"/></g>`,
		"fallback": "iconmind:whisk-duotone-thin",
	});
}

export default Component;
