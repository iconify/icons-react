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
		"content": `<style>.a15u2ub2w {
  stroke-opacity: 0.4;
  d: path("M9 8v12");
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
</style><g class="nrj6p8qat"><path class="a15u2ub2w"/><path class="vrlw9abfp"/></g>`,
		"fallback": "coolicons:window-sidebar-duocolor-sharp",
	});
}

export default Component;
