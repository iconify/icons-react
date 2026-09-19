import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xdc93g1nz.css';
import '../../css/m/mr5if-bbh.css';
import '../../css/t/ta49hcb6o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xdc93g1nz"/><path clip-rule="evenodd" class="mr5if-bbh"/><path clip-rule="evenodd" class="ta49hcb6o"/></g>`,
		"fallback": "healthicons:wheelchair-alt2x-outline",
	});
}

export default Component;
