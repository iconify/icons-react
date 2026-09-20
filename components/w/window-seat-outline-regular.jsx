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
		"content": `<style>.i5be34b7d {
  d: path("M13 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qoupp8b_p {
  d: path("M4 4v16h8V4Z");
}
</style><g class="nrj6p8qat"><path class="qoupp8b_p"/><path class="i5be34b7d"/></g>`,
		"fallback": "iconmind:window-seat-outline-regular",
	});
}

export default Component;
