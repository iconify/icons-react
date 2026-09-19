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
		"content": `<style>.r9scpwboa {
  fill: var(--svg-color--d0d0d0, #d0d0d0);
  d: path("M2 2h60v60H2z");
}

.z7x0mu8oe {
  fill: var(--svg-color--333, #333);
  d: path("M10 10h44v44H10z");
}
</style><path class="r9scpwboa"/><path class="z7x0mu8oe"/>`,
		"fallback": "emojione:white-square-button",
	});
}

export default Component;
