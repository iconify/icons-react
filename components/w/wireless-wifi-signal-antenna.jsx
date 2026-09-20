import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xbw2qqb1c.css';
import '../../css/f/f1fr8e5tb.css';
import '../../css/h/hu_mhy3vt.css';
import '../../css/a/abcxsmbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xbw2qqb1c"/><path class="f1fr8e5tb"/><path class="hu_mhy3vt"/><path class="abcxsmbgo"/></g>`,
		"fallback": "streamline-freehand-color:wireless-wifi-signal-antenna",
	});
}

export default Component;
