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
		"content": `<style>.vakncp3-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.913 30.833H12.99a.986.986 0 0 1-.925-1.325L21.16 4.712A1.85 1.85 0 0 1 22.893 3.5h4.924a.986.986 0 0 1 .926 1.325l-9.095 24.797a1.85 1.85 0 0 1-1.735 1.211M25.107 44.5h-4.924a.986.986 0 0 1-.926-1.325l9.095-24.797a1.85 1.85 0 0 1 1.735-1.211h4.924a.986.986 0 0 1 .925 1.325l-9.094 24.796a1.85 1.85 0 0 1-1.735 1.212");
}
</style><path class="vakncp3-x"/>`,
		"fallback": "arcticons:winamp",
	});
}

export default Component;
