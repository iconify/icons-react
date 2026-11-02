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
		"content": `<style>.ftqvu8bsq {
  fill: currentColor;
  d: path("M22 18a3 3 0 0 1-3 3H5a3.004 3.004 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3ZM4 18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9H4Z");
}
</style><path class="ftqvu8bsq"/>`,
		"fallback": "coolicons:window-fill",
	});
}

export default Component;
