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
		"content": `<style>.jkiw8jkie {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19 2C20.1046 2 21 2.895 21 4V20H22C22.552 20 23 20.448 23 21C23 21.552 22.552 22 22 22H2C1.4477 22 1 21.552 1 21C1 20.448 1.4477 20 2 20H3V4C3 2.895 3.8954 2 5 2H19ZM11 4V11H5V13H11V20H13V13H19V11H13V4H11Z");
}
</style><path clip-rule="evenodd" class="jkiw8jkie"/>`,
		"fallback": "keyline-icons:window-fill",
	});
}

export default Component;
