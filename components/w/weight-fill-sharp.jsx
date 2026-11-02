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
		"content": `<style>.a7dy-vbon {
  fill: currentColor;
  d: path("M14.829 7H17a1 1 0 0 1 .97.757l3 12A.998.998 0 0 1 20 21H4a.998.998 0 0 1-.97-1.243l3-12A1 1 0 0 1 7 7h2.171a3 3 0 1 1 5.658 0m-3.536-1.707a.999.999 0 1 0 1.414 1.414a.999.999 0 1 0-1.414-1.414");
}
</style><path class="a7dy-vbon"/>`,
		"fallback": "coolicons:weight-fill-sharp",
	});
}

export default Component;
