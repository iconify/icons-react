import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bi65hexcg.css';
import '../../css/q/qpjfb68ib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bi65hexcg"/><path class="qpjfb68ib"/></g>`,
		"fallback": "reicon:zip-duotone",
	});
}

export default Component;
