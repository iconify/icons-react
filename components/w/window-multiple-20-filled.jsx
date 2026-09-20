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
		"content": `<style>.gsachlbem {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v8A2.5 2.5 0 0 0 4.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 12.5 2zM3 12.5V6h11v6.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 3 12.5M7.5 18a2.5 2.5 0 0 1-2.45-2h1.035A1.5 1.5 0 0 0 7.5 17H14a3 3 0 0 0 3-3V7.5a1.5 1.5 0 0 0-1-1.415V5.05a2.5 2.5 0 0 1 2 2.45V14a4 4 0 0 1-4 4z");
}
</style><path class="gsachlbem"/>`,
		"fallback": "fluent:window-multiple-20-filled",
	});
}

export default Component;
