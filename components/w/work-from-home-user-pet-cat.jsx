import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w1_stzbsr.css';
import '../../css/x/x8du9qb9x.css';
import '../../css/d/dw5kuabjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w1_stzbsr"/><path class="x8du9qb9x"/><path class="dw5kuabjz"/></g>`,
		"fallback": "streamline-freehand-color:work-from-home-user-pet-cat",
	});
}

export default Component;
