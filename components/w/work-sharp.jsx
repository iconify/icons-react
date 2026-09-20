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
		"content": `<style>.vubzm2bll {
  fill: currentColor;
  d: path("M3 20V7h6V4h6v3h6v13zm7-13h4V5h-4z");
}
</style><path class="vubzm2bll"/>`,
		"fallback": "material-symbols-light:work-sharp",
	});
}

export default Component;
