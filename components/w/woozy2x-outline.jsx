import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u4ktaub7o.css';
import '../../css/s/svxw3cbgx.css';
import '../../css/y/yzptmubja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u4ktaub7o"/><path class="svxw3cbgx"/><path clip-rule="evenodd" class="yzptmubja"/></g>`,
		"fallback": "healthicons:woozy2x-outline",
	});
}

export default Component;
