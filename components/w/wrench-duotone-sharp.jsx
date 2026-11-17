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
		"content": `<style>.d-cko6b3q {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 12a5.385 5.385 0 0 1 7-7l-2 2l3 3l2-2a5.385 5.385 0 0 1-7 7m0 0l-5 5a2.121 2.121 0 1 1-3-3l5-5");
}

.fjz-2ib_x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 12a5.386 5.386 0 0 1 7-7l-2 2l3 3l2-2a5.386 5.386 0 0 1-7 7l-5 5a2.122 2.122 0 0 1-3-3Z");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="fjz-2ib_x"/><path class="d-cko6b3q"/></g>`,
		"fallback": "coolicons:wrench-duotone-sharp",
	});
}

export default Component;
