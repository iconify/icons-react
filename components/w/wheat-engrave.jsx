import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e6kgpsb7j.css';
import '../../css/v/vwgq52b0i.css';
import '../../css/l/l-jn8moas.css';
import '../../css/n/nefmuxb7i.css';
import '../../css/e/ec07nutst.css';
import '../../css/d/diveyknpc.css';
import '../../css/x/xvb8vnahb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e6kgpsb7j"/><path class="vwgq52b0i wm-shadow"/><path class="l-jn8moas"/><path class="nefmuxb7i"/><path class="ec07nutst"/><path class="diveyknpc"/><path class="xvb8vnahb"/></g>`,
		"fallback": "withicons:wheat-engrave",
	});
}

export default Component;
