import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fv6kxxgsn.css';
import '../../css/e/ekbzj6b2x.css';
import '../../css/a/ad1ird2hr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fv6kxxgsn"/><path class="ekbzj6b2x"/><path class="ad1ird2hr"/></g>`,
		"fallback": "streamline-freehand-color:worldwide-web-disable",
	});
}

export default Component;
