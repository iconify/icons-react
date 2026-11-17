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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.mxtaw3b7w {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 8h10l3 12H4zm5 0a2 2 0 1 1 0-4m0 0a2 2 0 1 1 0 4");
}

.tgu5rgbgr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m17 8l3 12H4L7 8Z");
}
</style><g class="ft5dv1b6b"><path class="tgu5rgbgr"/><path class="mxtaw3b7w"/></g>`,
		"fallback": "coolicons:weight-duotone-sharp",
	});
}

export default Component;
