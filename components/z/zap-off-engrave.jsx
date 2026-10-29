import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ccyqkhomb.css';
import '../../css/i/i64imcqzx.css';
import '../../css/m/m9qb4nitn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ccyqkhomb"/><path class="i64imcqzx wm-shadow"/><path class="m9qb4nitn"/></g>`,
		"fallback": "withicons:zap-off-engrave",
	});
}

export default Component;
