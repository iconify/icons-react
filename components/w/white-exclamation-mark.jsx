import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyyezbxs {
  d: path("M37 42.4H27L23 2h18z");
}

.l_kccubev {
  fill: var(--svg-color--a6aeb0, #a6aeb0);
}

.o-hj8qbbo {
  cx: 32px;
  cy: 54.4px;
  rx: 7.7px;
  ry: 7.6px;
}
</style><g class="l_kccubev"><path class="cuyyezbxs"/><ellipse class="o-hj8qbbo"/></g>`,
		"fallback": "emojione:white-exclamation-mark",
	});
}

export default Component;
