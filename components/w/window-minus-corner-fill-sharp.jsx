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
		"content": `<style>.k_dz4-bcy {
  fill: currentColor;
  d: path("M2 20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4v10h4a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1m11-5h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2");
}
</style><path class="k_dz4-bcy"/>`,
		"fallback": "coolicons:window-minus-corner-fill-sharp",
	});
}

export default Component;
