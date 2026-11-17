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
		"content": `<style>.cb6rsacfb {
  fill: currentColor;
  d: path("M14.75 3v6H19a1 1 0 0 1 .783 1.623l-8.75 11A1.002 1.002 0 0 1 9.25 21v-6H5a1 1 0 0 1-.783-1.623l8.75-11A1.002 1.002 0 0 1 14.75 3");
}
</style><path class="cb6rsacfb"/>`,
		"fallback": "coolicons:zap-fill-sharp",
	});
}

export default Component;
