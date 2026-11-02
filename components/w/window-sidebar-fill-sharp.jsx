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
		"content": `<style>.asb6nuq8y {
  fill: currentColor;
  d: path("M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm-1 16V9H10v10Z");
}
</style><path class="asb6nuq8y"/>`,
		"fallback": "coolicons:window-sidebar-fill-sharp",
	});
}

export default Component;
