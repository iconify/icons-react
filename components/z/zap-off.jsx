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
		"content": `<style>.tpbg5ibiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7.658 10.658l-2.035 2.56A.482.482 0 0 0 6 14h3.25a1 1 0 0 1 1 1v5c0 .33.417.476.623.217l2.81-3.533m2.659-3.342l2.035-2.56A.482.482 0 0 0 18 10h-3.25a1 1 0 0 1-1-1V4a.35.35 0 0 0-.623-.217l-2.81 3.533M2 5l17 17");
}
</style><path class="tpbg5ibiy"/>`,
		"fallback": "coolicons:zap-off",
	});
}

export default Component;
