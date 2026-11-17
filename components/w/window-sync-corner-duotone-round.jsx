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
		"content": `<style>.f3zr3mbrg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4M8 20H7a4 4 0 0 1-4-4V8m0 0h18m0 11a4.472 4.472 0 0 1-8 0m3 0h-3v3m0-7a4.472 4.472 0 0 1 8 0m-3 0h3v-3");
}

.ft5dv1b6b {
  fill: none;
}

.onxvj9b_v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z");
}
</style><g class="ft5dv1b6b"><path class="onxvj9b_v"/><path class="f3zr3mbrg"/></g>`,
		"fallback": "coolicons:window-sync-corner-duotone-round",
	});
}

export default Component;
