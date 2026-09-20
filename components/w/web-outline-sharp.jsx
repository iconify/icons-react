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
		"content": `<style>.mgravacfw {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h11v-3.884H4zm12 0h4V9.23h-4zM4 13.116h11V9.23H4z");
}
</style><path class="mgravacfw"/>`,
		"fallback": "material-symbols-light:web-outline-sharp",
	});
}

export default Component;
