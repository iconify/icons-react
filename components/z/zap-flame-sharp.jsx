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
		"content": `<style>.tozn2bcsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.833 3L3 10.333h3.5V15l5.833-7.333h-3.5zM17 9c.333 1.667 1.333 3 2.667 4c1 1 1.333 2.333 1.333 4a4 4 0 1 1-8 0c0-1 .333-1.667.667-2m0 0a1.333 1.333 0 1 0 2.666 0c0-1-.333-1.333-.666-2C15 11.667 15.333 10.333 17 9");
}
</style><path class="tozn2bcsq"/>`,
		"fallback": "coolicons:zap-flame-sharp",
	});
}

export default Component;
