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
		"content": `<style>.l6nk0lrxt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20 2C20.552 2 21 2.448 21 3V20H23V22H1V20H3V3C3 2.448 3.448 2 4 2H20ZM5 8V10H11V14H5V16H11V20H13V16H19V14H13V10H19V8H5Z");
}
</style><path clip-rule="evenodd" class="l6nk0lrxt"/>`,
		"fallback": "keyline-icons:window-awning-sharp-fill",
	});
}

export default Component;
