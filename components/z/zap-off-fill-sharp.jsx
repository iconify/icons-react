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
		"content": `<style>.wt4o0-wqb {
  fill: currentColor;
  d: path("M16.275 15.032L8.826 7.584l4.141-5.207A1.002 1.002 0 0 1 14.75 3v6H19a1 1 0 0 1 .783 1.623ZM2.707 4.293l17 17a.999.999 0 1 1-1.414 1.414l-4.524-4.524l-2.736 3.44A1.002 1.002 0 0 1 9.25 21v-6H5a1 1 0 0 1-.783-1.623l2.103-2.643l-5.027-5.027a.999.999 0 1 1 1.414-1.414");
}
</style><path class="wt4o0-wqb"/>`,
		"fallback": "coolicons:zap-off-fill-sharp",
	});
}

export default Component;
