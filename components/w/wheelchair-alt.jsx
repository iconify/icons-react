import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pweuf5b9g.css';
import '../../css/k/kjcw9db7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pweuf5b9g"/><path clip-rule="evenodd" class="kjcw9db7w"/></g>`,
		"fallback": "healthicons:wheelchair-alt",
	});
}

export default Component;
