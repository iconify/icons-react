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
		"content": `<style>.fegfyzu5g {
  fill: currentColor;
  d: path("M4 21V3h16v18zm3-10h4v-1h2v1h4V6H7zm0 7h10v-5H7zm-1 1h12V5H6z");
}
</style><path class="fegfyzu5g"/>`,
		"fallback": "material-symbols:window-closed",
	});
}

export default Component;
