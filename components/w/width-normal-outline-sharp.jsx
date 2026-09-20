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
		"content": `<style>.h4x7fzbii {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h4.673V6H4zm5.673 0h4.654V6H9.673zm5.654 0H20V6h-4.673zM9.673 6v12z");
}
</style><path class="h4x7fzbii"/>`,
		"fallback": "material-symbols-light:width-normal-outline-sharp",
	});
}

export default Component;
