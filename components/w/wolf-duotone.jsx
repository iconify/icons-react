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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.t7ftxy1my {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m21 11l-2 2l2 2l-5 2l-1 2c-.613 1.226-1.387 2-2 2h-2c-.613 0-1.387-.774-2-2l-1-2l-5-2l2-2l-2-2l1-1c.64-.64 1-1.36 1-2V4c0-.369.631-.369 1 0l2 2c.64.64 1.36 1 2 1h4c.64 0 1.36-.36 2-1l2-2c.369-.369 1-.369 1 0v4c0 .64.36 1.36 1 2zM9 11l1 1m5-1l-1 1m-2 6h.01");
}

.zqwutegcg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m21 15l-5 2l-1 2c-.326.651-1.15 1.999-2 2h-2c-.85-.001-1.674-1.349-2-2l-1-2l-5-2l2-2l-2-2l1-1c.52-.521 1-1.237 1-2V4c0-.369.631-.369 1 0l2 2c.521.52 1.237 1 2 1h4c.763 0 1.479-.48 2-1l2-2c.369-.369 1-.369 1 0v4c0 .763.48 1.479 1 2l1 1l-2 2Z");
}
</style><g class="ft5dv1b6b"><path class="zqwutegcg"/><path class="t7ftxy1my"/></g>`,
		"fallback": "coolicons:wolf-duotone",
	});
}

export default Component;
