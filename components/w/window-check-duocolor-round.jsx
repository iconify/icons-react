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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.shhtmacsp {
  stroke-opacity: 0.4;
  d: path("m9 14l2 2l4-4");
}

.w-y_52bbf {
  d: path("M3 8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm0 0h18");
}
</style><g class="nrj6p8qat"><path class="shhtmacsp"/><path class="w-y_52bbf"/></g>`,
		"fallback": "coolicons:window-check-duocolor-round",
	});
}

export default Component;
