import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qwrl_0bad.css';
import '../../css/i/iuu1x3ifx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qwrl_0bad"/><path clip-rule="evenodd" class="iuu1x3ifx"/></g>`,
		"fallback": "healthicons:xray-outline-24px",
	});
}

export default Component;
