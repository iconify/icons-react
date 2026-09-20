import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.divu0sfhj {
  fill: currentColor;
  d: path("M138 204a10 10 0 1 1-10-10a10 10 0 0 1 10 10m33.53-43.85a74 74 0 0 0-87.06 0a6 6 0 0 0 7.06 9.7a62 62 0 0 1 72.94 0a6 6 0 0 0 8.38-1.32a6 6 0 0 0-1.32-8.38");
}
</style><path class="divu0sfhj"/>`,
		"fallback": "ph:wifi-low-light",
	});
}

export default Component;
