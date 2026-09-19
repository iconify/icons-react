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
		"content": `<style>.kfs7nwd-w {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--4bd37b, #4bd37b);
}

.xgrwu_xlq {
  fill: var(--svg-color--fff, #fff);
  d: path("M46 14L25 35.6l-7-7.2l-7 7.2L25 50l28-28.8z");
}
</style><circle class="kfs7nwd-w"/><path class="xgrwu_xlq"/>`,
		"fallback": "emojione:white-heavy-check-mark",
	});
}

export default Component;
