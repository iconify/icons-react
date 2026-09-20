import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-7kbeaet.css';
import '../../css/x/x-87khb_l.css';
import '../../css/q/q991illdj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a-7kbeaet"/><path class="x-87khb_l"/><path class="q991illdj"/></g>`,
		"fallback": "streamline-color:wine",
	});
}

export default Component;
