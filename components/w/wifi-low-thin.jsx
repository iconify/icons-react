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
		"content": `<style>.k6wy-0bab {
  fill: currentColor;
  d: path("M136 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8m34.35-42.23a72 72 0 0 0-84.7 0a4 4 0 1 0 4.71 6.46a64 64 0 0 1 75.28 0a4 4 0 1 0 4.71-6.46");
}
</style><path class="k6wy-0bab"/>`,
		"fallback": "ph:wifi-low-thin",
	});
}

export default Component;
