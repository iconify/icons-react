import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfujh5vjc.css';
import '../../css/t/tgr18saqk.css';
import '../../css/r/rrhwiyb4p.css';
import '../../css/s/sdfc81ytu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qfujh5vjc"/><path class="tgr18saqk"/><path class="rrhwiyb4p"/><path class="sdfc81ytu"/></g>`,
		"fallback": "streamline-color:windmill",
	});
}

export default Component;
