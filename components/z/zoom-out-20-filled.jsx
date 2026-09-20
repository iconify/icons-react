import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cg00_2bvn {
  fill: currentColor;
  d: path("M8.5 2a6.5 6.5 0 0 1 4.937 10.73l3.417 3.416a.5.5 0 0 1-.638.765l-.07-.058l-3.417-3.417A6.5 6.5 0 1 1 8.5 2M6 8a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z");
}
</style><path class="cg00_2bvn"/>`,
		"fallback": "fluent:zoom-out-20-filled",
	});
}

export default Component;
