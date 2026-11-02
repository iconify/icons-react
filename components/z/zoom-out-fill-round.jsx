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
		"content": `<style>.ws2eqjbbp {
  fill: currentColor;
  d: path("m16.321 14.906l5.386 5.387a.999.999 0 1 1-1.414 1.414l-5.387-5.386A8.002 8.002 0 0 1 4.343 4.343a8 8 0 0 1 11.978 10.563M7 11h6a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2");
}
</style><path class="ws2eqjbbp"/>`,
		"fallback": "coolicons:zoom-out-fill-round",
	});
}

export default Component;
