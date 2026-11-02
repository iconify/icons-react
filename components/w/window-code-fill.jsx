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
		"content": `<style>.twfg1zlbo {
  fill: currentColor;
  d: path("M22 6v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3M4 18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9H4Zm6.707-5.293L9.414 14l1.293 1.293a.999.999 0 1 1-1.414 1.414l-2-2a.997.997 0 0 1 0-1.414l2-2a.999.999 0 1 1 1.414 1.414m4-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a.999.999 0 1 1-1.414-1.414L14.586 14l-1.293-1.293a.999.999 0 1 1 1.414-1.414");
}
</style><path class="twfg1zlbo"/>`,
		"fallback": "coolicons:window-code-fill",
	});
}

export default Component;
