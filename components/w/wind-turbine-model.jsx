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
		"content": `<style>.hh1ogpbvi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9V2.5M12 9l-6.5 3.75M12 9l6.5 3.75M12 9v12.5m-3.5 0h7");
}
</style><path class="hh1ogpbvi"/>`,
		"fallback": "uix-sharp:wind-turbine-model",
	});
}

export default Component;
