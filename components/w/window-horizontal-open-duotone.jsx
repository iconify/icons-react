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

.zkrfl9bfg {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  fill-rule: evenodd;
  d: path("M20 4C21.1046 4 22 4.895 22 6V18C22.5523 18 23 18.448 23 19C23 19.552 22.5523 20 22 20H2C1.4477 20 1 19.552 1 19C1 18.448 1.4477 18 2 18V6C2 4.895 2.8954 4 4 4H20ZM13 18H20V6H13V18Z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="zkrfl9bfg"/><path class="o6xwmgbrg"/></g>`,
		"fallback": "keyline-icons:window-horizontal-open-duotone",
	});
}

export default Component;
