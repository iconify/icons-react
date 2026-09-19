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
		"content": `<style>.dxs3_thzc {
  fill: var(--svg-color--d0d0d0, #d0d0d0);
  d: path("M16 16h32v32H16z");
}
</style><path class="dxs3_thzc"/>`,
		"fallback": "emojione:white-small-square",
	});
}

export default Component;
