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

.pge9nsd9b {
  d: path("M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0h18");
}

.shhtmacsp {
  stroke-opacity: 0.4;
  d: path("m9 14l2 2l4-4");
}
</style><g class="nrj6p8qat"><path class="shhtmacsp"/><path class="pge9nsd9b"/></g>`,
		"fallback": "coolicons:window-check-duocolor",
	});
}

export default Component;
