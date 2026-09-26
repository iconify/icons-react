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
		"content": `<style>.p-k3mlf4q {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5L18 5M6.7071 8.7071L17.2929 19.2929M17.2929 8.7071L6.7071 19.2929");
}
</style><path class="p-k3mlf4q"/>`,
		"fallback": "keyline-icons:x-line-top-sharp-duotone",
	});
}

export default Component;
