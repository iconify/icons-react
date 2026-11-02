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
		"content": `<style>.ey3ko8bcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 17a4 4 0 1 0 8 0h4m0 4a4 4 0 1 0 0-8a4 4 0 0 1-4-4V7m4 0a4 4 0 1 0-8 0v10");
}
</style><path class="ey3ko8bcj"/>`,
		"fallback": "coolicons:webhook-round",
	});
}

export default Component;
