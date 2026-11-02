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
		"content": `<style>.c8o6k5bjw {
  fill: currentColor;
  d: path("M5.232 12.36a8.808 8.808 0 0 1 13.536 0a1 1 0 1 1-1.536 1.28a6.7 6.7 0 0 0-2.4-1.838A6.7 6.7 0 0 0 12 11.19a6.77 6.77 0 0 0-5.232 2.45a1 1 0 1 1-1.536-1.28m2.936 3.085a4.54 4.54 0 0 1 1.712-1.538a4.64 4.64 0 0 1 4.24 0a4.54 4.54 0 0 1 1.712 1.538a1 1 0 0 1-1.664 1.11a2.55 2.55 0 0 0-.966-.871a2.6 2.6 0 0 0-1.202-.29a2.58 2.58 0 0 0-2.168 1.161a1 1 0 1 1-1.664-1.11M12 18h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}
</style><path class="c8o6k5bjw"/>`,
		"fallback": "coolicons:wifi-medium-fill-sharp",
	});
}

export default Component;
