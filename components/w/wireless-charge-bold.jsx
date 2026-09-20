import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y35wp_bax.css';
import '../../css/g/glqy23b9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y35wp_bax"/><path class="glqy23b9h"/></g>`,
		"fallback": "solar:wireless-charge-bold",
	});
}

export default Component;
