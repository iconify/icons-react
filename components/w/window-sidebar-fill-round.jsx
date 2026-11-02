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
		"content": `<style>.nfwk4ub9u {
  fill: currentColor;
  d: path("M22 16a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5Zm-5 3a3 3 0 0 0 3-3V9H10v10Z");
}
</style><path class="nfwk4ub9u"/>`,
		"fallback": "coolicons:window-sidebar-fill-round",
	});
}

export default Component;
