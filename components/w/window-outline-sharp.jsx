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
		"content": `<style>.u_qvqrwif {
  fill: currentColor;
  d: path("M20 20H4V4h16zm-7.5-7.5V19H19v-6.5zm0-1H19V5h-6.5zm-1 0V5H5v6.5zm0 1H5V19h6.5z");
}
</style><path class="u_qvqrwif"/>`,
		"fallback": "material-symbols-light:window-outline-sharp",
	});
}

export default Component;
