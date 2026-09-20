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
		"content": `<style>.i-yaqpbgi {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h10.5v-3.5H4zm12.5 0H20V9h-3.5zM4 12.5h10.5V9H4z");
}
</style><path class="i-yaqpbgi"/>`,
		"fallback": "material-symbols:web-outline-sharp",
	});
}

export default Component;
