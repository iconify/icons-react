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
</style><path class="r9scpwboa"/>`,
		"fallback": "emojione:white-large-square",
	});
}

export default Component;
