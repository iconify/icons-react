import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p72l2y11j.css';
import '../../css/w/wnv60flnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p72l2y11j"/><path class="wnv60flnz"/></g>`,
		"fallback": "withicons:wifi-sketch",
	});
}

export default Component;
