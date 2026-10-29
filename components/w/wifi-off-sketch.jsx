import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g7e_1fbda.css';
import '../../css/k/kda5nl4ib.css';
import '../../css/r/rzni5ydsb.css';
import '../../css/u/ur3zlfbzj.css';
import '../../css/i/ip8h3_xdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g7e_1fbda wm-k"/><path class="kda5nl4ib wm-k"/><circle class="rzni5ydsb wm-k"/><path class="ur3zlfbzj wm-s"/><path class="ip8h3_xdk wm-s"/></g>`,
		"fallback": "withicons:wifi-off-sketch",
	});
}

export default Component;
