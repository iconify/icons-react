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
		"content": `<style>.e64u-bb6v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11h10v10H3Zm5 0v10m-5-5h10m4-5a4 4 0 0 0-4-4m8 4a8 8 0 0 0-8-8");
}

.ft5dv1b6b {
  fill: none;
}

.nrbn-xblf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 11h10v10H3Z");
}
</style><g class="ft5dv1b6b"><path class="nrbn-xblf"/><path class="e64u-bb6v"/></g>`,
		"fallback": "coolicons:window-sensor-duotone-sharp",
	});
}

export default Component;
