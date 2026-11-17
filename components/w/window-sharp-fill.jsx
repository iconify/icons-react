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
		"content": `<style>.zdg4fnu5p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20 2C20.552 2 21 2.448 21 3V20H23V22H1V20H3V3C3 2.448 3.448 2 4 2H20ZM11 4V11H5V13H11V20H13V13H19V11H13V4H11Z");
}
</style><path clip-rule="evenodd" class="zdg4fnu5p"/>`,
		"fallback": "keyline-icons:window-sharp-fill",
	});
}

export default Component;
