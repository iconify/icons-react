import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zpd_gbb0e.css';
import '../../css/g/gmvxbacpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zpd_gbb0e"/><path class="gmvxbacpc"/></g>`,
		"fallback": "flowbite:whatsapp-solid",
	});
}

export default Component;
