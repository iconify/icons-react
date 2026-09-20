import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c84gunbrl.css';
import '../../css/r/rkw3t7bda.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c84gunbrl"/><path class="rkw3t7bda"/></g>`,
		"fallback": "jam:whatsapp",
	});
}

export default Component;
