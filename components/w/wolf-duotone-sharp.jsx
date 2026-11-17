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

.n_iu7rijx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m15 7l4-4v6l2 2l-2 2l2 2l-5 2l-2 4h-4l-2-4l-5-2l2-2l-2-2l2-2V3l4 4Z");
}

.xpkhuutcw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m15 7l4-4v6l2 2l-2 2l2 2l-5 2l-2 4h-4l-2-4l-5-2l2-2l-2-2l2-2V3l4 4zm-6 4l1 1m5-1l-1 1m-2 6h.01");
}
</style><g class="ft5dv1b6b"><path class="n_iu7rijx"/><path class="xpkhuutcw"/></g>`,
		"fallback": "coolicons:wolf-duotone-sharp",
	});
}

export default Component;
