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
		"content": `<style>.c5na-fb4t {
  fill: currentColor;
  d: path("M19 21H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3M4 9v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9Zm4 6c0-.265.105-.52.293-.707l4-4a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 11 18H9a1 1 0 0 1-1-1Zm2.586 1l3-3l-.586-.586l-3 3V16Z");
}
</style><path class="c5na-fb4t"/>`,
		"fallback": "coolicons:window-edit-fill",
	});
}

export default Component;
