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
		"content": `<style>.jkmee3bvw {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h3V6H4zm4 0h8V6H8zm9 0h3V6h-3zM8 6v12z");
}
</style><path class="jkmee3bvw"/>`,
		"fallback": "material-symbols-light:width-wide-outline-sharp",
	});
}

export default Component;
