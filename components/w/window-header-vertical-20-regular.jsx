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
		"content": `<style>.bqyigs05v {
  fill: currentColor;
  d: path("M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3zM7 4h7.5A1.5 1.5 0 0 1 16 5.5v9a1.5 1.5 0 0 1-1.5 1.5H7z");
}
</style><path class="bqyigs05v"/>`,
		"fallback": "fluent:window-header-vertical-20-regular",
	});
}

export default Component;
