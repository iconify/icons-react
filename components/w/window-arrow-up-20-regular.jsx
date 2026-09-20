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
		"content": `<style>.bekognt9m {
  fill: currentColor;
  d: path("M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1a5.5 5.5 0 0 0-1-.393V7H4v7.5A1.5 1.5 0 0 0 5.5 16h3.707q.149.524.393 1H5.5A2.5 2.5 0 0 1 3 14.5zM14.5 4h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4m0 15a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m2.354-4.853a.5.5 0 1 1-.708.707L15 13.707V16.5a.5.5 0 0 1-1 0v-2.793l-1.146 1.147a.5.5 0 1 1-.708-.707l2-2a.5.5 0 0 1 .351-.147h.006a.5.5 0 0 1 .348.144l.003.003z");
}
</style><path class="bekognt9m"/>`,
		"fallback": "fluent:window-arrow-up-20-regular",
	});
}

export default Component;
