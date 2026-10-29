import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cony-fkuc.css';
import '../../css/o/opbxnxbxe.css';
import '../../css/u/uex_d5bbi.css';
import '../../css/w/w3sy0kb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cony-fkuc"/><path class="opbxnxbxe wm-a"/><path class="uex_d5bbi wm-k"/><path class="w3sy0kb_n wm-a"/></g>`,
		"fallback": "withicons:weight-sketch",
	});
}

export default Component;
