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
		"content": `<style>.h9za2-3et {
  stroke-opacity: 0.4;
  d: path("M9 17v-2l4-4l2 2l-4 4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vrlw9abfp {
  d: path("M3 8V4h18v16H3zm0 0h18");
}
</style><g class="nrj6p8qat"><path class="h9za2-3et"/><path class="vrlw9abfp"/></g>`,
		"fallback": "coolicons:window-edit-duocolor-sharp",
	});
}

export default Component;
