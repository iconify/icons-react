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
		"content": `<style>.rdw50d6mv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m8.592 7.877l3.13-3.934A1.697 1.697 0 0 1 14.75 5v3a.997.997 0 0 0 1 1H17a1.966 1.966 0 0 1 1.538 3.188l-6.26 7.869A1.699 1.699 0 0 1 9.25 19v-3a.997.997 0 0 0-1-1H7a1.966 1.966 0 0 1-1.538-3.188Z");
}
</style><path class="rdw50d6mv"/>`,
		"fallback": "coolicons:zap-bulk-round",
	});
}

export default Component;
