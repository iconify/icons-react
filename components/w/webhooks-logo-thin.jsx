import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tc52q197g {
  fill: currentColor;
  d: path("M180.7 172h-72.89a44 44 0 1 1-79-30.41a4 4 0 0 1 6.4 4.81A35.67 35.67 0 0 0 28 168a36 36 0 0 0 72 0a4 4 0 0 1 4-4h76.7a12 12 0 1 1 0 8M64 180a12 12 0 0 0 9.33-19.54l37.11-60.3a4 4 0 0 0-1.31-5.51A36 36 0 1 1 161 49.58a4 4 0 1 0 7.33-3.19a44 44 0 1 0-66.71 52.83l-35.1 57.05A11.6 11.6 0 0 0 64 156a12 12 0 0 0 0 24m128-56a44 44 0 0 0-19.56 4.58l-35.11-57A12 12 0 1 0 128 76a12.2 12.2 0 0 0 2.52-.27L167.63 136a4 4 0 0 0 5.5 1.31A36 36 0 1 1 192 204a4 4 0 0 0 0 8a44 44 0 0 0 0-88");
}
</style><path class="tc52q197g"/>`,
		"fallback": "ph:webhooks-logo-thin",
	});
}

export default Component;
