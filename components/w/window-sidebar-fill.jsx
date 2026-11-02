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
		"content": `<style>.w_2jjd36c {
  fill: currentColor;
  d: path("M22 18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Zm-3 1a1 1 0 0 0 1-1V9H10v10Z");
}
</style><path class="w_2jjd36c"/>`,
		"fallback": "coolicons:window-sidebar-fill",
	});
}

export default Component;
