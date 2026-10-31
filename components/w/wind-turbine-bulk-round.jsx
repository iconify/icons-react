import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zg4o6gakp.css';
import '../../css/j/j0vdsabou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zg4o6gakp"/><path class="j0vdsabou"/></g>`,
		"fallback": "coolicons:wind-turbine-bulk-round",
	});
}

export default Component;
