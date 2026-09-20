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
		"content": `<style>.xurycdbqg {
  fill: currentColor;
  d: path("M8 21v-2h3v-4.1q-2.15-.35-3.575-2T6 9V3h12v6q0 2.25-1.425 3.9T13 14.9V19h3v2zM8 8h8V5H8z");
}
</style><path class="xurycdbqg"/>`,
		"fallback": "material-symbols:wine-bar-sharp",
	});
}

export default Component;
