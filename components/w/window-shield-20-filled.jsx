import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qr1-ltsog {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.507a4.3 4.3 0 0 1-1-.661V7H4v7a2 2 0 0 0 2 2h4.576c.19.374.416.706.66 1H6a3 3 0 0 1-3-3zm11.88 3.16c.508.532 1.484 1.379 2.684 1.552a.5.5 0 0 1 .436.482v2.323c0 3.122-2.784 4.255-3.386 4.463a.34.34 0 0 1-.228 0C13.785 17.772 11 16.64 11 13.517v-2.323a.5.5 0 0 1 .436-.482c1.2-.173 2.175-1.02 2.683-1.553a.535.535 0 0 1 .762 0");
}
</style><path class="qr1-ltsog"/>`,
		"fallback": "fluent:window-shield-20-filled",
	});
}

export default Component;
