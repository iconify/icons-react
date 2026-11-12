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
		"content": `<style>.j7mhwdrod {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3v18M21 3v18M7 8h10m-3-3l3 3l-3 3m3 5H7m3-3l-3 3l3 3");
}
</style><path class="j7mhwdrod"/>`,
		"fallback": "coolicons:websocket-round",
	});
}

export default Component;
