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
		"content": `<style>.as4m4ac9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3a15.81 15.81 0 0 0 18 0M3 21a15.81 15.81 0 0 1 18 0M7 5v14M17 5v14");
}
</style><path class="as4m4ac9y"/>`,
		"fallback": "coolicons:zodiac-gemini-round",
	});
}

export default Component;
