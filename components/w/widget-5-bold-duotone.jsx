import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/k/kegcs-8wl.css';
import '../../css/u/urak06bsx.css';
import '../../css/x/xqvy96-xr.css';
import '../../css/b/bid5r0rff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="kegcs-8wl"/><path class="urak06bsx"/></g><path class="xqvy96-xr"/><path class="bid5r0rff"/></g>`,
		"fallback": "solar:widget-5-bold-duotone",
	});
}

export default Component;
