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
		"content": `<style>.cw-g_6iyh {
  fill: currentColor;
  d: path("M7.5 6.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M4 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5zm4 7V17h7V3H5v14h2V9.5a.5.5 0 0 1 1 0");
}
</style><path class="cw-g_6iyh"/>`,
		"fallback": "fluent:xbox-console-20-regular",
	});
}

export default Component;
