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
		"content": `<style>.ntmeapo2u {
  fill: currentColor;
  d: path("M9.346 18.327L3 11.981l6.346-6.346l.689.688l-5.152 5.158h16.136v1H4.902l5.158 5.158z");
}
</style><path class="ntmeapo2u"/>`,
		"fallback": "material-symbols-light:west-outline-sharp",
	});
}

export default Component;
