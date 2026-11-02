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
		"content": `<style>.oging0-6n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 5C11.232.674 3 4.79 3 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m4 7c5.768 4.326 14 .21 14-7a3 3 0 1 0-6 0a3 3 0 0 0 6 0");
}
</style><path class="oging0-6n"/>`,
		"fallback": "coolicons:zodiac-cancer-duotone-round",
	});
}

export default Component;
