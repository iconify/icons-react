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
		"content": `<style>.ju1iq-4lb {
  fill: currentColor;
  d: path("M7 4h10a5 5 0 0 1 5 5v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20H7a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5m8.514 7.143l-5-3A.997.997 0 0 0 9 9v6a1 1 0 0 0 1.514.857l5-3a.997.997 0 0 0 0-1.714");
}
</style><path class="ju1iq-4lb"/>`,
		"fallback": "coolicons:youtube-fill-round",
	});
}

export default Component;
