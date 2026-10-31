import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cjwdg8b7d.css';
import '../../css/b/bgbshn1il.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cjwdg8b7d"/><path class="bgbshn1il"/></g>`,
		"fallback": "coolicons:window-sidebar-right-bulk-round",
	});
}

export default Component;
