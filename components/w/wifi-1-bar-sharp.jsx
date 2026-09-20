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
		"content": `<style>.tos_zrqmn {
  fill: currentColor;
  d: path("m12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16t1.913.375t1.612 1.075z");
}
</style><path class="tos_zrqmn"/>`,
		"fallback": "material-symbols:wifi-1-bar-sharp",
	});
}

export default Component;
