import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uj3lqpbzs.css';
import '../../css/p/pmtadbchy.css';
import '../../css/v/vnwlw3via.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uj3lqpbzs"/><path class="pmtadbchy wm-shadow"/><path class="vnwlw3via"/></g>`,
		"fallback": "withicons:wrench-engrave",
	});
}

export default Component;
