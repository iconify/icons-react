import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cm-utbc2b.css';
import '../../css/k/kjo442bcf.css';
import '../../css/y/ydkt6lb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cm-utbc2b"/><path class="kjo442bcf"/><path class="ydkt6lb1q"/></g>`,
		"fallback": "andrsrxn:webcam-off",
	});
}

export default Component;
