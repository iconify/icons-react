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
		"content": `<style>.lbckw1y8e {
  fill: currentColor;
  d: path("M12.75 9.25a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5zM10 2a8 8 0 0 1 6.162 13.102l4.618 4.618a.75.75 0 0 1-1.06 1.06l-4.618-4.618A8 8 0 1 1 10 2m0 1.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13");
}
</style><path class="lbckw1y8e"/>`,
		"fallback": "fluent:zoom-out-24-regular",
	});
}

export default Component;
