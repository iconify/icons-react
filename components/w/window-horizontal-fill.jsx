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
		"content": `<style>.j3ukdvbqx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20 4C21.105 4 22 4.895 22 6V18C22.552 18 23 18.448 23 19C23 19.552 22.552 20 22 20H2C1.448 20 1 19.552 1 19C1 18.448 1.448 18 2 18V6C2 4.895 2.895 4 4 4H20ZM11 6V11H4V13H11V18H13V13H20V11H13V6H11Z");
}
</style><path clip-rule="evenodd" class="j3ukdvbqx"/>`,
		"fallback": "keyline-icons:window-horizontal-fill",
	});
}

export default Component;
