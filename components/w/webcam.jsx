import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cm-utbc2b.css';
import '../../css/p/p3ii9wawv.css';
import '../../css/l/lq59qabbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cm-utbc2b"/><path class="p3ii9wawv"/><path class="lq59qabbd"/></g>`,
		"fallback": "andrsrxn:webcam",
	});
}

export default Component;
