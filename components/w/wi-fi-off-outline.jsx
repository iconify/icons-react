import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fa-0nabpm.css';
import '../../css/v/v4cxfwahk.css';
import '../../css/h/h4sdbs22x.css';
import '../../css/l/l89afdc_q.css';
import '../../css/o/or_o64goa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fa-0nabpm"/><path class="v4cxfwahk"/><path class="h4sdbs22x"/><path class="l89afdc_q"/><path class="or_o64goa"/></g>`,
		"fallback": "solar:wi-fi-off-outline",
	});
}

export default Component;
