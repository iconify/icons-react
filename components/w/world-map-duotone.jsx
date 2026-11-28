import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mznaomb6m.css';
import '../../css/i/iub3ni-2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mznaomb6m secondary"/><path class="iub3ni-2q primary"/></g>`,
		"fallback": "iconaut:world-map-duotone",
	});
}

export default Component;
