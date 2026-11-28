import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ae1024-nd.css';
import '../../css/m/mbbnwcbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ae1024-nd"/><path class="mbbnwcbew"/></g>`,
		"fallback": "iconaut:window-horizontal-open-solid",
	});
}

export default Component;
