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
		"content": `<style>.lufxq7bjk {
  d: path("M6.5 8.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ly2b2eaue {
  d: path("M8.5 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.pbh8k3r0o {
  d: path("M14 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="o_ssmh9ez"/><path class="lufxq7bjk"/><path class="pbh8k3r0o"/><path class="ly2b2eaue"/></g>`,
		"fallback": "iconmind:zone-spread-outline-bold",
	});
}

export default Component;
