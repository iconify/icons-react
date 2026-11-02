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
		"content": `<style>.qyscxebgk {
  fill: currentColor;
  d: path("M3 6h8a1 1 0 0 0 .922-1.387A.99.99 0 0 0 11 4a1 1 0 0 1 0-2a3 3 0 1 1 0 6H3a1 1 0 0 1 0-2m0 5h15a2 2 0 0 0 0-4a1 1 0 0 1 0-2a4 4 0 0 1 0 8H3a1 1 0 0 1 0-2m0 5h11a3 3 0 1 1 0 6a1 1 0 0 1 0-2a1.001 1.001 0 0 0 0-2H3a1 1 0 0 1 0-2");
}
</style><path class="qyscxebgk"/>`,
		"fallback": "coolicons:wind-fill",
	});
}

export default Component;
