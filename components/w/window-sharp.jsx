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
		"content": `<style>.q9eymvw8t {
  fill: currentColor;
  d: path("M12.5 12.5H20V20h-7.5zm0-1V4H20v7.5zm-1 0H4V4h7.5zm0 1V20H4v-7.5z");
}
</style><path class="q9eymvw8t"/>`,
		"fallback": "material-symbols-light:window-sharp",
	});
}

export default Component;
