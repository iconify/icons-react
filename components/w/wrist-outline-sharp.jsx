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
		"content": `<style>.ql80ydi6v {
  fill: currentColor;
  d: path("M11 21.9L6.1 17H1v-2h5.9l3.45 3.425L8.875 15.5H21v2h-8.875l1.125 2.225zM1 9V7h4.6l1.95-2H20v2H8.425L6.4 9zm13 5v-2h9v2zm0-3.5v-2h8v2zM1 12.7");
}
</style><path class="ql80ydi6v"/>`,
		"fallback": "material-symbols:wrist-outline-sharp",
	});
}

export default Component;
