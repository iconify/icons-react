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
		"content": `<style>.q3jop5grj {
  cx: 7px;
  cy: 5.25px;
  r: 2.5px;
}

.tq0ogqbac {
  cx: 17px;
  cy: 5.25px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe5j2gbzm {
  d: path("M7 7.75v3.5a5 5 0 0 0 5 5v5m5-13.5v3.5a5 5 0 0 1-5 5");
}
</style><g class="x2cwu0gfd"><circle class="q3jop5grj"/><circle class="tq0ogqbac"/><path class="xe5j2gbzm"/></g>`,
		"fallback": "iconoven:wired-earphones-sharp",
	});
}

export default Component;
