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
		"content": `<style>.rd791plxl {
  d: path("m12 14.5l-2.1-2.05A1.3 1.3 0 0 1 12 10.9a1.3 1.3 0 0 1 2.1 1.55Zm-2 6.75v-4.5h4v4.5");
}

.ughy03oow {
  d: path("M12 5.5V2.75m-7.75 17.9V11l.49-.35l6.77-4.8l.49-.35l.49.35l6.77 4.8l.49.35v10.25H4.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ughy03oow"/><path class="rd791plxl"/></g>`,
		"fallback": "iconoven:wedding-chapel-sharp",
	});
}

export default Component;
