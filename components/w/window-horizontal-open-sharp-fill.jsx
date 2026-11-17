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
		"content": `<style>.swrqsobfg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M21 4C21.552 4 22 4.448 22 5V18H23V20H1V18H2V5C2 4.448 2.448 4 3 4H21ZM13 6V18H20V6H13ZM4 11V13H11V11H4Z");
}
</style><path clip-rule="evenodd" class="swrqsobfg"/>`,
		"fallback": "keyline-icons:window-horizontal-open-sharp-fill",
	});
}

export default Component;
