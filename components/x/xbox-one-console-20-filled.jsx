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
		"content": `<style>.b767a7rrt {
  fill: currentColor;
  d: path("M18 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h14zm-1-7a1 1 0 0 1 1 1v4H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm-1.75 2a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="b767a7rrt"/>`,
		"fallback": "fluent:xbox-one-console-20-filled",
	});
}

export default Component;
