import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/ddacnib4h.css';
import '../../css/v/vwxsdrsmr.css';
import '../../css/o/oyx227b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ddacnib4h"/><path class="vwxsdrsmr"/><path class="oyx227b1q"/></g>`,
		"fallback": "hugeicons:workflow-circle-03",
	});
}

export default Component;
