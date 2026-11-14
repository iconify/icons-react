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
		"content": `<style>.ncid3oorz {
  d: path("M5.5 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 3.5V12H12l.5 4");
}

.srxuuumcp {
  d: path("M11.186 13.919a4.5 4.5 0 1 1-7.372 0M9 9.5l8.5 6M16 17h5.5v3.5H16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ncid3oorz"/><path class="srxuuumcp"/></g>`,
		"fallback": "uix-sharp:wheelchair-curling",
	});
}

export default Component;
