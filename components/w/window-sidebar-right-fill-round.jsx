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
		"content": `<style>.r02mcwb0y {
  fill: currentColor;
  d: path("M7 21a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21Zm-3-5a3.004 3.004 0 0 0 3 3h7V9H4Z");
}
</style><path class="r02mcwb0y"/>`,
		"fallback": "coolicons:window-sidebar-right-fill-round",
	});
}

export default Component;
