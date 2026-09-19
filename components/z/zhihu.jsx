import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kd7m9eb1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.097 11.603H23.89M11.357 6.568c-.3 4.931-2.237 7.266-5.857 9.36m11.273-4.325c-.356 10.363 2.206 20.992-11.054 29.83M16.634 30.21l6.764 9.362M6.485 23.973h18.938m3.394-13.847v26.49h2.517v4.27l5.419-4.27H42.5v-26.49Zm8.648 5.089v11.166");
}
</style><path class="kd7m9eb1m"/>`,
		"fallback": "arcticons:zhihu",
	});
}

export default Component;
