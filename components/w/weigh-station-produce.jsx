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
		"content": `<style>.ke6gz1r6i {
  d: path("M19.999 11.661L20 11.5c0-6-5.5-6-8-4.5c-2.5-1.5-8-1.5-8 4.5c0 5 3 9 5.5 9c1.014 0 1.534-.493 2.094-.68M12 7l.5-3.5M13 5c.75-2 2.5-2.5 4-2c-.5 1.75-2.25 2.5-4 2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wga60euph {
  d: path("M15.75 14.5h4.5L22 21.75h-8ZM18 17h.01");
}
</style><g class="ulnmmdpxh"><path class="ke6gz1r6i"/><path class="wga60euph"/></g>`,
		"fallback": "uix-sharp:weigh-station-produce",
	});
}

export default Component;
