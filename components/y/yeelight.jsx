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
		"content": `<style>.ulz77ubti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.703 30.995L4.5 26.62V13.764L24 21.38v12.856m8.297-3.241L43.5 26.62V13.764L24 21.38v12.856");
}
</style><path class="ulz77ubti"/>`,
		"fallback": "arcticons:yeelight",
	});
}

export default Component;
