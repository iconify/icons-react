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
		"content": `<style>.crq9tybqe {
  d: path("m4 20l6-8m4 0l6-8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q3dpwpbvj {
  stroke-opacity: 0.4;
  d: path("M4 4h4l12 16h-4Z");
}
</style><g class="nrj6p8qat"><path class="q3dpwpbvj"/><path class="crq9tybqe"/></g>`,
		"fallback": "coolicons:x-duocolor-sharp",
	});
}

export default Component;
