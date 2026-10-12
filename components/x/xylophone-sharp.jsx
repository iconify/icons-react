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
		"content": `<style>.dgf_phh1j {
  cx: 19.75px;
  cy: 4.25px;
  r: 1.5px;
}

.fy174ictx {
  d: path("m18.4 3.6l-2.65-.85");
}

.pavbni3sg {
  d: path("M2.75 4h2.4v16h-2.4zm5.4 1.5h2.4v13h-2.4zm5.4 1.5h2.4v10h-2.4zm5.3 1.5h2.4v7h-2.4z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pavbni3sg"/><circle class="dgf_phh1j"/><path class="fy174ictx"/></g>`,
		"fallback": "iconoven:xylophone-sharp",
	});
}

export default Component;
