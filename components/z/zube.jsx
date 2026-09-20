import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":178};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ux5cdvbfh {
  fill: var(--svg-color--0d83dd, #0d83dd);
  d: path("m0 63.228l119.833 63.23v50.744L0 113.972zM119.834 0L8.994 58.483L57.08 83.855l62.754-33.111zm16.333 0v50.744L207.914 88.6l-71.747 37.856V177.2L256 113.971V63.229z");
}
</style><path class="ux5cdvbfh"/>`,
		"fallback": "logos:zube",
	});
}

export default Component;
