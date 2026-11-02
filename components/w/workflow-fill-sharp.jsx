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
		"content": `<style>.pftyt_bzi {
  fill: currentColor;
  d: path("M11 2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8v4h4v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-3H7a1 1 0 0 1-1-1v-5H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z");
}
</style><path class="pftyt_bzi"/>`,
		"fallback": "coolicons:workflow-fill-sharp",
	});
}

export default Component;
