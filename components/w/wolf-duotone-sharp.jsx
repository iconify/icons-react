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

.tfup3gqnz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m14.586 6l3.707-3.707A1 1 0 0 1 20 3v5.586l1.707 1.707a1 1 0 0 1 0 1.414L20.414 13l1.293 1.293a1 1 0 0 1-.336 1.635l-4.647 1.859l-1.83 3.66A1 1 0 0 1 14 22h-4a1 1 0 0 1-.894-.553l-1.83-3.66l-4.647-1.859a1 1 0 0 1-.336-1.635L3.586 13l-1.293-1.293a1 1 0 0 1 0-1.414L4 8.586V3a1.002 1.002 0 0 1 1.707-.707L9.414 6Z");
}

.xpkhuutcw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m15 7l4-4v6l2 2l-2 2l2 2l-5 2l-2 4h-4l-2-4l-5-2l2-2l-2-2l2-2V3l4 4zm-6 4l1 1m5-1l-1 1m-2 6h.01");
}
</style><g class="ft5dv1b6b"><path class="tfup3gqnz"/><path class="xpkhuutcw"/></g>`,
		"fallback": "coolicons:wolf-duotone-sharp",
	});
}

export default Component;
