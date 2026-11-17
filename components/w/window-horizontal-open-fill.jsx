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
		"content": `<style>.cmscgxbem {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20 4C21.1046 4 22 4.895 22 6V18C22.552 18 23 18.448 23 19C23 19.552 22.552 20 22 20H2C1.4477 20 1 19.552 1 19C1 18.448 1.4477 18 2 18V6C2 4.895 2.8954 4 4 4H20ZM13 6V18H20V6H13ZM4 11V13H11V11H4Z");
}
</style><path clip-rule="evenodd" class="cmscgxbem"/>`,
		"fallback": "keyline-icons:window-horizontal-open-fill",
	});
}

export default Component;
