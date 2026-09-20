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
		"content": `<style>.xi8enmbzu {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h4V6H4zm12 0h4V6h-4z");
}
</style><path class="xi8enmbzu"/>`,
		"fallback": "material-symbols:width-normal-sharp",
	});
}

export default Component;
