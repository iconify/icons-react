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
		"content": `<style>.vloqe2b9q {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7.707 20.707a3.121 3.121 0 1 1-4.414-4.414l4.561-4.561a6.386 6.386 0 0 1 8.517-7.66a.998.998 0 0 1 .336 1.635L15.414 7L17 8.586l1.293-1.293a1 1 0 0 1 1.635.336c.304.753.459 1.559.457 2.371a6.386 6.386 0 0 1-8.117 6.146Z");
}
</style><path class="vloqe2b9q"/>`,
		"fallback": "coolicons:wrench-bulk-round",
	});
}

export default Component;
