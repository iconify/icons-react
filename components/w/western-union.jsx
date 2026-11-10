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
		"content": `<style>.wyc2zrbbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.474 24.432l-6.86-11.964m-2.809 17.507l-2.008 3.462c-1.625 2.802-5.673 2.791-7.284-.018L4.5 12.468h35.228L43.5 18.89l-8.437 14.546c-1.624 2.802-5.673 2.791-7.284-.018l-12.011-20.95");
}
</style><path class="wyc2zrbbk"/>`,
		"fallback": "arcticons:western-union",
	});
}

export default Component;
