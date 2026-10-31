import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aktlt3ojg.css';
import '../../css/s/scc1kvjkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aktlt3ojg"/><path class="scc1kvjkf"/></g>`,
		"fallback": "coolicons:zap-off-bulk-round",
	});
}

export default Component;
