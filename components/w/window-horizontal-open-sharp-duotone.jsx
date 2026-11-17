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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.o6xwmgbrg {
  d: path("M11 13V18H4V13H11ZM11 6V11H4V6H11Z");
}

.oy7ha3bnr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  fill-rule: evenodd;
  d: path("M21 4C21.552 4 22 4.448 22 5V18H23V20H1V18H2V5C2 4.448 2.448 4 3 4H21ZM13 18H20V6H13V18Z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="oy7ha3bnr"/><path class="o6xwmgbrg"/></g>`,
		"fallback": "keyline-icons:window-horizontal-open-sharp-duotone",
	});
}

export default Component;
