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
		"content": `<style>.owagcvrhf {
  fill: currentColor;
  d: path("m2.293 9.293l2-2a2.414 2.414 0 0 1 3.414 0l1 1a.414.414 0 0 0 .586 0l1-1a2.414 2.414 0 0 1 3.414 0l1 1a.414.414 0 0 0 .586 0l1-1a2.414 2.414 0 0 1 3.414 0l2 2a.999.999 0 1 1-1.414 1.414l-2-2a.414.414 0 0 0-.586 0l-1 1a2.414 2.414 0 0 1-3.414 0l-1-1a.414.414 0 0 0-.586 0l-1 1a2.414 2.414 0 0 1-3.414 0l-1-1a.414.414 0 0 0-.586 0l-2 2a.999.999 0 1 1-1.414-1.414m0 7l2-2a2.414 2.414 0 0 1 3.414 0l1 1a.414.414 0 0 0 .586 0l1-1a2.414 2.414 0 0 1 3.414 0l1 1a.414.414 0 0 0 .586 0l1-1a2.414 2.414 0 0 1 3.414 0l2 2a.999.999 0 1 1-1.414 1.414l-2-2a.414.414 0 0 0-.586 0l-1 1a2.414 2.414 0 0 1-3.414 0l-1-1a.414.414 0 0 0-.586 0l-1 1a2.414 2.414 0 0 1-3.414 0l-1-1a.414.414 0 0 0-.586 0l-2 2a.999.999 0 1 1-1.414-1.414");
}
</style><path class="owagcvrhf"/>`,
		"fallback": "coolicons:zodiac-aquarius-fill",
	});
}

export default Component;
