import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t7zzz4baa {
  fill: var(--svg-color--e0e0e0, #e0e0e0);
  d: path("M40.03 40.03h47.95v47.95H40.03z");
}
</style><path class="t7zzz4baa"/>`,
		"fallback": "noto-v1:white-medium-small-square",
	});
}

export default Component;
