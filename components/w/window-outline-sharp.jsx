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
		"content": `<style>.iu5e7sbjl {
  fill: currentColor;
  d: path("M21 21H3V3h18zm-8-8v6h6v-6zm0-2h6V5h-6zm-2 0V5H5v6zm0 2H5v6h6z");
}
</style><path class="iu5e7sbjl"/>`,
		"fallback": "material-symbols:window-outline-sharp",
	});
}

export default Component;
