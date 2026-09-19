import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dc_0-nqwd.css';
import '../../css/v/va81webep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dc_0-nqwd"/><path class="va81webep"/></g>`,
		"fallback": "hugeicons:workflow-circle-04",
	});
}

export default Component;
