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
		"content": `<style>.kus8t0b2k {
  d: path("M9 16a3.606 3.606 0 0 1 5-1m-8-2a7.8 7.8 0 0 1 4-2m-7-1a12 12 0 0 1 3-3m9 4a7.8 7.8 0 0 1 4 3m-9-8a12.04 12.04 0 0 1 11 4m-9 9h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p52u7fomt {
  stroke-opacity: 0.4;
  d: path("m2 3l19 19");
}
</style><g class="nrj6p8qat"><path class="p52u7fomt"/><path class="kus8t0b2k"/></g>`,
		"fallback": "coolicons:wifi-off-duocolor-sharp",
	});
}

export default Component;
