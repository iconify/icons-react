import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kik4ldbph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m2.67 23.63l41.11-8C33.4-6.39 2.86 1.37 2.67 23.63M9.7 25l7.62-1.55c.77 5.8-7.32 6.2-7.62 1.55m18.8-3.66l7.62-1.55c.77 5.83-7.32 6.21-7.62 1.55M4.41 32.68l40.92-8.07c.25 20.66-29.67 30.55-40.92 8.07");
}
</style><path class="kik4ldbph"/>`,
		"fallback": "arcticons:zmninja",
	});
}

export default Component;
