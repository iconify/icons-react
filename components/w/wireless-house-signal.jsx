import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rj16pnbkz.css';
import '../../css/j/jhwau62fh.css';
import '../../css/j/jscp3nbuo.css';
import '../../css/u/u8b67klrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rj16pnbkz"/><path class="jhwau62fh"/><path class="jscp3nbuo"/><path class="u8b67klrk"/></g>`,
		"fallback": "streamline-freehand:wireless-house-signal",
	});
}

export default Component;
