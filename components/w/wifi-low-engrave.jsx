import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a-7jhj4gy.css';
import '../../css/z/zf57rje2z.css';
import '../../css/y/ygtvqmgmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a-7jhj4gy"/><path class="wm-shadow zf57rje2z"/><path class="ygtvqmgmi"/></g>`,
		"fallback": "withicons:wifi-low-engrave",
	});
}

export default Component;
