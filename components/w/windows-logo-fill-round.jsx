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
		"content": `<style>.umwmrmjbn {
  fill: currentColor;
  d: path("M22 11h-9V4.883l7.89-.877A1 1 0 0 1 22 5Zm-11 0H2V7a1 1 0 0 1 .89-.994L11 5.105Zm-9 2h9v5.895l-8.11-.901A1 1 0 0 1 2 17Zm11 0h9v6a1 1 0 0 1-1.11.994L13 19.117Z");
}
</style><path class="umwmrmjbn"/>`,
		"fallback": "coolicons:windows-logo-fill-round",
	});
}

export default Component;
