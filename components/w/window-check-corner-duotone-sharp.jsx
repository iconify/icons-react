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

.glx2tvjnt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 4v4H3V4Z");
}

.nwd_9ccdc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8V4h18v4M8 20H3V8m0 0h18m-8 9l3 3l5-6");
}
</style><g class="ft5dv1b6b"><path class="glx2tvjnt"/><path class="nwd_9ccdc"/></g>`,
		"fallback": "coolicons:window-check-corner-duotone-sharp",
	});
}

export default Component;
