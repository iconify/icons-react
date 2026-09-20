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
		"content": `<style>.ddw7hvm8m {
  fill: currentColor;
  d: path("m218.12 209.56l-61-95.8l59.72-65.69a12 12 0 0 0-17.76-16.14l-55.27 60.84l-37.69-59.21A12 12 0 0 0 96 28H48a12 12 0 0 0-10.12 18.44l61 95.8l-59.76 65.69a12 12 0 1 0 17.76 16.14l55.31-60.84l37.69 59.21A12 12 0 0 0 160 228h48a12 12 0 0 0 10.12-18.44M166.59 204L69.86 52h19.55l96.73 152Z");
}
</style><path class="ddw7hvm8m"/>`,
		"fallback": "ph:x-logo-bold",
	});
}

export default Component;
