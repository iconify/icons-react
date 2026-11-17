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
		"content": `<style>.zxfawv2_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 19V6C3 5.448 3.448 5 4 5H20C20.552 5 21 5.448 21 6V19M2 19H22M12 5V19M3 12H21");
}
</style><path class="zxfawv2_l"/>`,
		"fallback": "keyline-icons:window-horizontal",
	});
}

export default Component;
