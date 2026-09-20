import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tal1wh_ue.css';
import '../../css/b/byn6ei0zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tal1wh_ue"/><path class="byn6ei0zd"/></g>`,
		"fallback": "solar:wineglass-triangle-bold",
	});
}

export default Component;
