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
		"content": `<style>.eb2r34bre {
  fill: currentColor;
  d: path("M10 5.5a.5.5 0 0 0-1 0V6H7.5a.5.5 0 0 0 0 1H9v1H6.5a.5.5 0 0 0 0 1H9v1H6.5a.5.5 0 0 0 0 1H9v1H7.5a1.5 1.5 0 1 0 1.415 1h1.17a1.5 1.5 0 1 0 1.415-1H10v-1h2.5a.5.5 0 0 0 0-1H10V9h2.5a.5.5 0 0 0 0-1H10V7h1.5a.5.5 0 0 0 0-1H10zm1.5 7.5a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1m-4.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M5.5 2A2.5 2.5 0 0 0 3 4.5v11A2.5 2.5 0 0 0 5.5 18h8a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 2zM4 4.5A1.5 1.5 0 0 1 5.5 3h8A1.5 1.5 0 0 1 15 4.5v11a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 15.5z");
}
</style><path class="eb2r34bre"/>`,
		"fallback": "fluent:xray-20-regular",
	});
}

export default Component;
