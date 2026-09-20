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
		"content": `<style>.d06vsltvj {
  fill: currentColor;
  d: path("M6 17a3 3 0 0 1-3-3V8a3 3 0 0 1 2.13-2.871A3 3 0 0 1 8 3h4.5A4.5 4.5 0 0 1 17 7.5V12a3 3 0 0 1-2.129 2.871A3 3 0 0 1 12 17zm9-3.27c.598-.346 1-.99 1-1.73V7.5A3.5 3.5 0 0 0 12.5 4H8c-.74 0-1.383.403-1.729 1H12a3 3 0 0 1 3 3zm-4.5.27a.5.5 0 0 0 0-1H7.707l4.147-4.146a.5.5 0 1 0-.707-.708L7 12.293V9.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5z");
}
</style><path class="d06vsltvj"/>`,
		"fallback": "fluent:window-new-rotate-180-20-filled",
	});
}

export default Component;
