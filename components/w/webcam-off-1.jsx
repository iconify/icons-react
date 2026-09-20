import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ew9ynfbey.css';
import '../../css/h/hoi9n8bdx.css';
import '../../css/q/q3piinb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ew9ynfbey"/><path class="hoi9n8bdx"/><path class="q3piinb7o"/></g>`,
		"fallback": "streamline-freehand:webcam-off-1",
	});
}

export default Component;
