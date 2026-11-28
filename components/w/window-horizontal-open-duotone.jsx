import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuzh0jb2x.css';
import '../../css/e/et3pwobjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wuzh0jb2x"/><path class="et3pwobjf primary"/></g>`,
		"fallback": "iconaut:window-horizontal-open-duotone",
	});
}

export default Component;
