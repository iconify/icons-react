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
		"content": `<style>.qy8ug-bin {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 21V3H20V21M1 21H23M12 3V21M4 12H20");
}
</style><path class="qy8ug-bin"/>`,
		"fallback": "keyline-icons:window-sharp",
	});
}

export default Component;
