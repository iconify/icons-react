import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rnmw6x9fk.css';
import '../../css/y/yi2d8monv.css';
import '../../css/m/me3p1obmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rnmw6x9fk wm-k"/><path class="wm-a yi2d8monv"/><path class="me3p1obmu wm-s"/></g>`,
		"fallback": "withicons:worried-sketch",
	});
}

export default Component;
