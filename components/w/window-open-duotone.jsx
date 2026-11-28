import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/itab_vbsv.css';
import '../../css/v/v4dpv6b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="itab_vbsv secondary"/><path class="primary v4dpv6b-i"/></g>`,
		"fallback": "iconaut:window-open-duotone",
	});
}

export default Component;
