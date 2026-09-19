import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v61t93bzx.css';
import '../../css/y/yxz7n2ipb.css';
import '../../css/s/siob3cbvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v61t93bzx"/><path clip-rule="evenodd" class="yxz7n2ipb"/><path clip-rule="evenodd" class="siob3cbvz"/></g>`,
		"fallback": "healthicons:woozy",
	});
}

export default Component;
