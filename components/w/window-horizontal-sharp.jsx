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
		"content": `<style>.qn9nb7bvc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 19V5H21V19M1 19H23M12 5V19M3 12H21");
}
</style><path class="qn9nb7bvc"/>`,
		"fallback": "keyline-icons:window-horizontal-sharp",
	});
}

export default Component;
