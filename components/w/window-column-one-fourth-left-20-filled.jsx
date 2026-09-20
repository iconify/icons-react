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
		"content": `<style>.dtj68kfst {
  fill: currentColor;
  d: path("M5.5 3A2.5 2.5 0 0 0 3 5.5V6h14v-.5A2.5 2.5 0 0 0 14.5 3zM17 7H7v10h7.5a2.5 2.5 0 0 0 2.5-2.5zM6 17V7H3v7.5A2.5 2.5 0 0 0 5.5 17z");
}
</style><path class="dtj68kfst"/>`,
		"fallback": "fluent:window-column-one-fourth-left-20-filled",
	});
}

export default Component;
