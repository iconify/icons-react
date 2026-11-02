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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qlk438mrc {
  d: path("M3 3h8v8H3Zm10 10h8v8h-8Z");
}

.t5lwdeoxd {
  stroke-opacity: 0.4;
  d: path("M7 11v6h6");
}
</style><g class="nrj6p8qat"><path class="t5lwdeoxd"/><path class="qlk438mrc"/></g>`,
		"fallback": "coolicons:workflow-duocolor-sharp",
	});
}

export default Component;
