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
		"content": `<style>.nd4ph-hjk {
  fill: var(--svg-color--d0d0d0, #d0d0d0);
  d: path("M12 12h40v40H12z");
}
</style><path class="nd4ph-hjk"/>`,
		"fallback": "emojione:white-medium-small-square",
	});
}

export default Component;
