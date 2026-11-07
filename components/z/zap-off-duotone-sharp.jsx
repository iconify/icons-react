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

.gdnfkebzl {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m17 14l3-3h-6V3l-4 4m-3 3l-3 3h6v8l4-4M2 5l17 17");
}

.r22-azgwv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m10 7l4-4v8h6l-3 3Zm-3 3l7 7l-4 4v-8H4Z");
}
</style><g class="ft5dv1b6b"><path class="r22-azgwv"/><path class="gdnfkebzl"/></g>`,
		"fallback": "coolicons:zap-off-duotone-sharp",
	});
}

export default Component;
