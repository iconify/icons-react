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
		"content": `<style>.dfxg86bow {
  fill: currentColor;
  d: path("M8.168 15.445a4.54 4.54 0 0 1 1.712-1.538a4.64 4.64 0 0 1 4.24 0a4.54 4.54 0 0 1 1.712 1.538a1 1 0 0 1-1.664 1.11a2.55 2.55 0 0 0-.966-.871a2.6 2.6 0 0 0-1.202-.29a2.58 2.58 0 0 0-2.168 1.161a1 1 0 1 1-1.664-1.11M12 18h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}
</style><path class="dfxg86bow"/>`,
		"fallback": "coolicons:wifi-low-fill-round",
	});
}

export default Component;
