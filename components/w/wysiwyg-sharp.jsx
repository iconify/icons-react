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
		"content": `<style>.mxws4cbwl {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V7H5zm2-7v-2h10v2zm0 4v-2h6v2z");
}
</style><path class="mxws4cbwl"/>`,
		"fallback": "material-symbols:wysiwyg-sharp",
	});
}

export default Component;
