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
		"content": `<style>.rdg1bxbnw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 17h5v-1a6.708 6.708 0 1 1 6 0v1h5M4 21h16");
}
</style><path class="rdg1bxbnw"/>`,
		"fallback": "coolicons:zodiac-libra-duotone",
	});
}

export default Component;
