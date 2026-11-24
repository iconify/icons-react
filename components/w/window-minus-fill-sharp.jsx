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
		"content": `<style>.a8bqnxjps {
  fill: currentColor;
  d: path("M2 20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m2-1h16V9H4Zm5-6h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><path class="a8bqnxjps"/>`,
		"fallback": "coolicons:window-minus-fill-sharp",
	});
}

export default Component;
