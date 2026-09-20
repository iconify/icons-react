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
		"content": `<style>.rpqdnubma {
  fill: currentColor;
  d: path("M11 13.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M7.5 13a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M3 4.5A2.5 2.5 0 0 1 5.5 2h8A2.5 2.5 0 0 1 16 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 3 15.5zm7 1a.5.5 0 0 0-1 0V6H7.5a.5.5 0 0 0 0 1H9v1H6.5a.5.5 0 0 0 0 1H9v1H6.5a.5.5 0 0 0 0 1H9v1H7.5a1.5 1.5 0 1 0 1.415 1h1.17a1.5 1.5 0 1 0 1.415-1H10v-1h2.5a.5.5 0 0 0 0-1H10V9h2.5a.5.5 0 0 0 0-1H10V7h1.5a.5.5 0 0 0 0-1H10z");
}
</style><path class="rpqdnubma"/>`,
		"fallback": "fluent:xray-20-filled",
	});
}

export default Component;
