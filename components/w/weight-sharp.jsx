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
		"content": `<style>.d_9kqkepe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 8h10l3 12H4zm5 0a2 2 0 1 1 0-4m0 0a2 2 0 1 1 0 4");
}
</style><path class="d_9kqkepe"/>`,
		"fallback": "coolicons:weight-sharp",
	});
}

export default Component;
