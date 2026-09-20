import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fwgot-b6f {
  cx: 18px;
  cy: 32px;
  r: 3px;
  fill: var(--svg-color--ccd6dd, #ccd6dd);
}

.gq5mj_c8a {
  fill: var(--svg-color--ccd6dd, #ccd6dd);
  d: path("M21 24a3 3 0 1 1-6 0V5a3 3 0 1 1 6 0z");
}
</style><circle class="fwgot-b6f"/><path class="gq5mj_c8a"/>`,
		"fallback": "twemoji:white-exclamation-mark",
	});
}

export default Component;
