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
		"content": `<style>.nrixckbaw {
  fill: currentColor;
  d: path("M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5zM4.5 7v7.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7z");
}
</style><path class="nrixckbaw"/>`,
		"fallback": "fluent:window-header-horizontal-20-filled",
	});
}

export default Component;
