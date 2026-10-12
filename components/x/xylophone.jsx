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
		"content": `<style>.dgf_phh1j {
  cx: 19.75px;
  cy: 4.25px;
  r: 1.5px;
}

.fy174ictx {
  d: path("m18.4 3.6l-2.65-.85");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o2e188kpk {
  width: 2.4px;
  height: 7px;
  x: 18.85px;
  y: 8.5px;
  rx: 0.75px;
}

.rn313_sfk {
  width: 2.4px;
  height: 13px;
  x: 8.15px;
  y: 5.5px;
  rx: 0.75px;
}

.s3k_glb0o {
  width: 2.4px;
  height: 10px;
  x: 13.55px;
  y: 7px;
  rx: 0.75px;
}

.spsniib-y {
  width: 2.4px;
  height: 16px;
  x: 2.75px;
  y: 4px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><rect class="spsniib-y"/><rect class="rn313_sfk"/><rect class="s3k_glb0o"/><rect class="o2e188kpk"/><circle class="dgf_phh1j"/><path class="fy174ictx"/></g>`,
		"fallback": "iconoven:xylophone",
	});
}

export default Component;
