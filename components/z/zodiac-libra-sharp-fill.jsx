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
		"content": `<style>.tojw79abd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 13L6 13L6 11C6 7.6863 8.6863 5 12 5C15.3137 5 18 7.6863 18 11L18 13L23 13M1 19L23 19");
}
</style><path class="tojw79abd"/>`,
		"fallback": "keyline-icons:zodiac-libra-sharp-fill",
	});
}

export default Component;
