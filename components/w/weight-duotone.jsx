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
		"content": `<style>.bk9ymdf4p {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 8h3c.882 0 1.706.825 2 2l2 8c.254 1.016-.238 2-1 2H6c-.762 0-1.254-.984-1-2l2-8c.294-1.175 1.118-2 2-2zm0 0a2 2 0 1 1 0-4m0 0a2 2 0 1 1 0 4");
}

.ft5dv1b6b {
  fill: none;
}

.oy8s2vb5h {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 8h6c.882 0 1.706.825 2 2l2 8c.254 1.016-.238 2-1 2H6c-.762 0-1.254-.984-1-2l2-8c.294-1.175 1.118-2 2-2");
}
</style><g class="ft5dv1b6b"><path class="oy8s2vb5h"/><path class="bk9ymdf4p"/></g>`,
		"fallback": "coolicons:weight-duotone",
	});
}

export default Component;
