import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/blor6etyc.css';
import '../../css/m/m49hu2bxr.css';
import '../../css/v/v1kuu0bke.css';
import '../../css/u/uq6pq445a.css';
import '../../css/y/yrgiqhxka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="blor6etyc wm-k"/><path class="m49hu2bxr wm-a"/><path class="v1kuu0bke wm-shadow"/><path class="uq6pq445a wm-k"/><path class="wm-a yrgiqhxka"/></g>`,
		"fallback": "withicons:workflow-engrave",
	});
}

export default Component;
