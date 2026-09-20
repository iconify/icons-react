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
		"content": `<style>.m5363obow {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h1.423V6H4zm14.577 0H20V6h-1.423z");
}
</style><path class="m5363obow"/>`,
		"fallback": "material-symbols-light:width-full-sharp",
	});
}

export default Component;
