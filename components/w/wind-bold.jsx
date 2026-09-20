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
		"content": `<style>.tdctdxbvx {
  fill: currentColor;
  d: path("M24 104a12 12 0 0 1 0-24h96a12 12 0 0 0 0-24a15.07 15.07 0 0 0-10.26 4.45a12 12 0 0 1-17-16.9A39.34 39.34 0 0 1 120 32a36 36 0 0 1 0 72Zm184-36a39.34 39.34 0 0 0-27.3 11.55a12 12 0 0 0 17 16.9A15.07 15.07 0 0 1 208 92a12 12 0 0 1 0 24H32a12 12 0 0 0 0 24h176a36 36 0 0 0 0-72m-56 84H40a12 12 0 0 0 0 24h112a12 12 0 0 1 0 24a15.1 15.1 0 0 1-10.27-4.45a12 12 0 1 0-17 16.9A39.34 39.34 0 0 0 152 224a36 36 0 0 0 0-72");
}
</style><path class="tdctdxbvx"/>`,
		"fallback": "ph:wind-bold",
	});
}

export default Component;
