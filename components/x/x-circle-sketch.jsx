import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pc5ui8bts.css';
import '../../css/t/t-1pbabqs.css';
import '../../css/d/du7h3-swe.css';
import '../../css/y/yvgsujbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pc5ui8bts wm-k"/><path class="t-1pbabqs wm-k"/><path class="du7h3-swe wm-a"/><path class="wm-a yvgsujbae"/></g>`,
		"fallback": "withicons:x-circle-sketch",
	});
}

export default Component;
