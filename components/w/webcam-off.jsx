import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cm-utbc2b.css';
import '../../css/r/r-p2qnwke.css';
import '../../css/w/wmvugsf9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cm-utbc2b"/><path class="r-p2qnwke"/><path class="wmvugsf9r"/></g>`,
		"fallback": "andrsrxn:webcam-off",
	});
}

export default Component;
