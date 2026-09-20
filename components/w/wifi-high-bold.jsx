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
		"content": `<style>.ufd-4rzda {
  fill: currentColor;
  d: path("M144 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m95.61-120.09a176 176 0 0 0-223.22 0a12 12 0 1 0 15.23 18.55a152 152 0 0 1 192.76 0a12 12 0 1 0 15.23-18.55m-32.16 35.73a128 128 0 0 0-158.9 0a12 12 0 0 0 14.9 18.81a104 104 0 0 1 129.1 0a12 12 0 0 0 14.9-18.81m-32.38 35.66a80.05 80.05 0 0 0-94.14 0a12 12 0 0 0 14.14 19.4a56 56 0 0 1 65.86 0a12 12 0 1 0 14.14-19.4");
}
</style><path class="ufd-4rzda"/>`,
		"fallback": "ph:wifi-high-bold",
	});
}

export default Component;
