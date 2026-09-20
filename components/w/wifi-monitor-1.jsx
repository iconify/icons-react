import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mplnyabyr.css';
import '../../css/g/gn_6abcxs.css';
import '../../css/t/twxul1b2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mplnyabyr"/><path class="gn_6abcxs"/><path class="twxul1b2b"/></g>`,
		"fallback": "streamline-freehand:wifi-monitor-1",
	});
}

export default Component;
