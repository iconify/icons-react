import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rhm6m-b8m {
  fill: currentColor;
  d: path("M6.75 3h14.5C23.28 3 25 4.712 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75C3 4.712 4.72 3 6.75 3M4.5 21.25a2.25 2.25 0 0 0 2.25 2.25h14.5a2.25 2.25 0 0 0 2.25-2.25V9.5h-19z");
}
</style><path class="rhm6m-b8m"/>`,
		"fallback": "fluent:window-28-filled",
	});
}

export default Component;
