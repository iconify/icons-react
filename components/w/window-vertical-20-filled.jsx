import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tili3k8so {
  fill: currentColor;
  d: path("M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5zm4 10h7.5a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H7z");
}
</style><path class="tili3k8so"/>`,
		"fallback": "fluent:window-vertical-20-filled",
	});
}

export default Component;
