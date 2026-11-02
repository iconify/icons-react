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
		"content": `<style>.dblba_boc {
  fill: currentColor;
  d: path("M5 21a3.004 3.004 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3Zm-1-3a1 1 0 0 0 1 1h9V9H4Z");
}
</style><path class="dblba_boc"/>`,
		"fallback": "coolicons:window-sidebar-right-fill",
	});
}

export default Component;
