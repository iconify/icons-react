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
		"content": `<style>.gnyzeqghk {
  fill: currentColor;
  d: path("M19 21H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3M4 9v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9Zm5 4h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><path class="gnyzeqghk"/>`,
		"fallback": "coolicons:window-minus-fill",
	});
}

export default Component;
