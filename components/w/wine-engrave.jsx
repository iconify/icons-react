import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yajfkvyqx.css';
import '../../css/e/e9u15lb3q.css';
import '../../css/o/opi96xvus.css';
import '../../css/u/uxsptjbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yajfkvyqx"/><path class="e9u15lb3q wm-shadow"/><path class="opi96xvus wm-k"/><path class="uxsptjbvt wm-a"/></g>`,
		"fallback": "withicons:wine-engrave",
	});
}

export default Component;
