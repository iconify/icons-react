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
		"content": `<style>.ifxa1tbxv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M21 4C21.552 4 22 4.448 22 5V18H23V20H1V18H2V5C2 4.448 2.448 4 3 4H21ZM11 6V11H4V13H11V18H13V13H20V11H13V6H11Z");
}
</style><path clip-rule="evenodd" class="ifxa1tbxv"/>`,
		"fallback": "keyline-icons:window-horizontal-sharp-fill",
	});
}

export default Component;
