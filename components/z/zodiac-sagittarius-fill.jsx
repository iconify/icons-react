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
		"content": `<style>.iin4xh33f {
  fill: currentColor;
  d: path("M2.293 20.293L7.586 15l-2.293-2.293a.999.999 0 1 1 1.414-1.414L9 13.586L18.586 4H14a1 1 0 0 1 0-2h7a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V5.414L10.414 15l2.293 2.293a.999.999 0 1 1-1.414 1.414L9 16.414l-5.293 5.293a.999.999 0 1 1-1.414-1.414");
}
</style><path class="iin4xh33f"/>`,
		"fallback": "coolicons:zodiac-sagittarius-fill",
	});
}

export default Component;
