import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ejlhdvtzy.css';
import '../../css/g/g6otpmk4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ejlhdvtzy secondary"/><path class="g6otpmk4i primary"/></g>`,
		"fallback": "iconaut:whistle-duotone",
	});
}

export default Component;
