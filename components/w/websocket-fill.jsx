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
		"content": `<style>.li3z1453y {
  fill: currentColor;
  d: path("M4 3v18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0m18 18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0ZM14.707 4.293l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L14.586 9H7a1 1 0 0 1 0-2h7.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414m-4 9.414L9.414 15H17a1 1 0 0 1 0 2H9.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414");
}
</style><path class="li3z1453y"/>`,
		"fallback": "coolicons:websocket-fill",
	});
}

export default Component;
