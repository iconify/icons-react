import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oyy_ozbcu.css';
import '../../css/d/dgd2b7dnc.css';
import '../../css/c/cvygwcb1l.css';
import '../../css/a/a5ognjdal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="oyy_ozbcu"/><path class="dgd2b7dnc wm-shadow"/><path class="cvygwcb1l"/><path class="a5ognjdal"/></g>`,
		"fallback": "withicons:wifi-engrave",
	});
}

export default Component;
