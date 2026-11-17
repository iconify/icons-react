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
		"content": `<style>.vbyo4eb1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.667 3h4.666L7.667 7.667H11L3.667 15L5 9H3zM16 21c-5.667-4.667-1.667-8.667 1-12c2.667 3.333 6.667 7.333 1 12Zm0 0c-3-2.333-1.667-4.333 1-6.667c2.667 2.334 4 4.334 1 6.667");
}
</style><path class="vbyo4eb1y"/>`,
		"fallback": "coolicons:zap-flame-alt-sharp",
	});
}

export default Component;
