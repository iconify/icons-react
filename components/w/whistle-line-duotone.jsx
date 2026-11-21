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
		"content": `<style>.dtoztob5w {
  d: path("M8.8501 5.5H20.2501C21.1501 5.5 21.6501 6.1 21.6501 6.9V8.1C21.6501 8.9 21.0501 9.5 20.0501 9.5H14.8501C15.9518 12.144 15.1928 15.1975 12.9815 17.0181C10.7702 18.8387 7.6278 18.9972 5.2445 17.4083C2.8613 15.8195 1.799 12.8578 2.629 10.1164C3.459 7.375 5.9858 5.5 8.8501 5.5Z");
}

.gpaciybzj {
  d: path("M11.0504 12C11.0504 13.215 10.0654 14.2 8.85039 14.2C7.63539 14.2 6.65039 13.215 6.65039 12C6.65039 10.785 7.63539 9.80005 8.85039 9.80005C10.0654 9.80005 11.0504 10.785 11.0504 12Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hewf5dbzz {
  d: path("M10.8496 5.5V8.1");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dtoztob5w"/><path class="hewf5dbzz"/><path class="gpaciybzj"/></g>`,
		"fallback": "solar:whistle-line-duotone",
	});
}

export default Component;
