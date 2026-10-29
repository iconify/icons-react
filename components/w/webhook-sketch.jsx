import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mey_bqu0u.css';
import '../../css/t/t8w3xju4u.css';
import '../../css/h/h7v3tlb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mey_bqu0u wm-k"/><path class="t8w3xju4u wm-k"/><path class="h7v3tlb3w wm-a"/></g>`,
		"fallback": "withicons:webhook-sketch",
	});
}

export default Component;
