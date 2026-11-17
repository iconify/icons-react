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

.gtgl94b1h {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h8v8H3Zm10 10h8v8h-8Z");
}

.kyvfnnb5z {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h8v8H3Zm10 10h8v8h-8Zm-6-2v6h6");
}
</style><g class="ft5dv1b6b"><path class="gtgl94b1h"/><path class="kyvfnnb5z"/></g>`,
		"fallback": "coolicons:workflow-duotone-sharp",
	});
}

export default Component;
