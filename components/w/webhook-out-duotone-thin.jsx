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
		"content": `<style>.e_1erlblk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m19 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jlfl_ccwj {
  d: path("M14 12h8");
}

.u58l6cc7h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vd_ltu4xs {
  d: path("M11 6.8a6 6 0 0 1 0 10.4");
}

.wn519caci {
  d: path("m19 9 3 3 -3 3");
}

.xgscl2bdj {
  fill: currentColor;
  d: path("M6 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.z2dxcwfcq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M11 6.8a6 6 0 0 1 0 10.4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zirb-hbnv {
  d: path("M6 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="xgscl2bdj"/><path class="z2dxcwfcq"/><path class="u58l6cc7h"/><path class="e_1erlblk"/><path class="vd_ltu4xs"/><path class="zirb-hbnv"/><path class="jlfl_ccwj"/><path class="wn519caci"/></g>`,
		"fallback": "iconmind:webhook-out-duotone-thin",
	});
}

export default Component;
