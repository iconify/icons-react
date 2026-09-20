import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z_g7wkj_s.css';
import '../../css/z/z0k1x4b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z_g7wkj_s"/><path class="z0k1x4b7u"/></g>`,
		"fallback": "streamline-freehand-color:work-from-home-travel-office",
	});
}

export default Component;
