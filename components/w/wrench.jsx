import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uesekybgi.css';
import '../../css/d/ddlon3bqu.css';
import '../../css/v/vnwlw3via.css';
import '../../css/v/vw_qznbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="uesekybgi"/><path class="ddlon3bqu wm-shine"/><path class="vnwlw3via"/><path class="vw_qznbjv wm-deco"/></g>`,
		"fallback": "withicons-kawaii:wrench",
	});
}

export default Component;
