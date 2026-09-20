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
		"content": `<style>.cjiy9cbiy {
  fill: var(--svg-color--fff, #fff);
  d: path("M17.654 5h2.315l-4.817 5.139A4.37 4.37 0 0 1 12 11.505a4.37 4.37 0 0 1-3.152-1.366L4.023 5h2.323l3.656 3.936c1.07 1.136 2.925 1.136 3.996 0zM6.315 18.992H4l4.847-5.124a4.38 4.38 0 0 1 3.156-1.366a4.38 4.38 0 0 1 3.156 1.367L20 18.999h-2.316l-3.678-3.92c-1.071-1.135-2.925-1.135-3.996 0z");
}

.ft5dv1b6b {
  fill: none;
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><path class="mumfproca"/><path class="cjiy9cbiy"/></g>`,
		"fallback": "token-branded:xrp-background",
	});
}

export default Component;
