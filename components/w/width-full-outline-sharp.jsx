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
		"content": `<style>.kprzxlbgw {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h1V6H4zm3 0h10V6H7zm12 0h1V6h-1zM7 6v12z");
}
</style><path class="kprzxlbgw"/>`,
		"fallback": "material-symbols:width-full-outline-sharp",
	});
}

export default Component;
