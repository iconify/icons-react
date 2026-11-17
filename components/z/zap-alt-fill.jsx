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
		"content": `<style>.yooti8bsp {
  fill: currentColor;
  d: path("M8.414 21a1.292 1.292 0 0 1-2.173-1.193L7.753 13H7a1.65 1.65 0 0 1-1.508-2.32l3.33-7.492A2 2 0 0 1 10.65 2H16a1.582 1.582 0 0 1 1.372 2.364L14.723 9H17a1.416 1.416 0 0 1 1 2.414Z");
}
</style><path class="yooti8bsp"/>`,
		"fallback": "coolicons:zap-alt-fill",
	});
}

export default Component;
