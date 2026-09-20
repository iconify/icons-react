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
		"content": `<style>.k8v2z8bpp {
  fill: currentColor;
  d: path("M2 11.5v-1h3v1zm3.054 5.666l-.708-.72l2.1-2.1l.72.708zm1.392-9.512l-2.1-2.1l.708-.72l2.112 2.112zM16.962 18.5l-4.443-4.442l-.942 2.903l-2.193-7.23l7.308 2.192l-2.892 1.03l4.354 4.355zM10.116 6V3h1v3zm4.669 1.654l-.72-.708l2.112-2.111l.708.707z");
}
</style><path class="k8v2z8bpp"/>`,
		"fallback": "material-symbols-light:web-traffic-outline",
	});
}

export default Component;
