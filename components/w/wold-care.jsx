import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xv14rjp9r.css';
import '../../css/b/by9ppzbbb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xv14rjp9r"/><path class="by9ppzbbb"/></g>`,
		"fallback": "healthicons:wold-care",
	});
}

export default Component;
