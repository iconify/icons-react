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
		"content": `<style>.kcwmdtbxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.874 2.54A21.5 21.5 0 0 1 40.47 37.78m-2.65 2.649a21.5 21.5 0 0 1-22.906 3.016m-3.246-1.874a21.5 21.5 0 0 1-8.842-13.878M2.5 23.959a21.5 21.5 0 0 1 3.888-12.332m2.409-2.871a21.5 21.5 0 0 1 13.329-6.215");
}
</style><path class="kcwmdtbxd"/>`,
		"fallback": "arcticons:zenmoney",
	});
}

export default Component;
