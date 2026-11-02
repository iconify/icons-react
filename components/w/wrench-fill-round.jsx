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
		"content": `<style>.gbami-btp {
  fill: currentColor;
  d: path("M7.854 11.732a6.386 6.386 0 0 1 8.517-7.66a.998.998 0 0 1 .336 1.635L15.414 7L17 8.586l1.293-1.293a1 1 0 0 1 1.635.336c.304.753.459 1.559.457 2.371a6.386 6.386 0 0 1-8.117 6.146l-4.561 4.561a3.121 3.121 0 1 1-4.414-4.414Z");
}
</style><path class="gbami-btp"/>`,
		"fallback": "coolicons:wrench-fill-round",
	});
}

export default Component;
