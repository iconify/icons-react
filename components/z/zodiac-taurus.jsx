import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jy-weacnj.css';
import '../../css/r/rdoqyyibh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jy-weacnj"/><path class="rdoqyyibh"/></g>`,
		"fallback": "iconaut:zodiac-taurus",
	});
}

export default Component;
