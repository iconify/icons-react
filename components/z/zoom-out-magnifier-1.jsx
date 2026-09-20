import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/je_vu3sjf.css';
import '../../css/u/u80o8dbkj.css';
import '../../css/v/vak15ibjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="je_vu3sjf"/><path class="u80o8dbkj"/><path class="vak15ibjv"/></g>`,
		"fallback": "streamline-freehand-color:zoom-out-magnifier-1",
	});
}

export default Component;
