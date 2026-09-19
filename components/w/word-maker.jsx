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
		"content": `<style>.s90hfmbru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 17.833h12.333v12.333H5.5zm12.333 0h12.333v12.333H17.833zm0 12.334h12.333V42.5H17.833zm12.334-12.334H42.5v12.333H30.167zm0-12.333H42.5v12.333H30.167z");
}
</style><path class="s90hfmbru"/>`,
		"fallback": "arcticons:word-maker",
	});
}

export default Component;
