import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eovavrbyd.css';
import '../../css/b/beua1hduq.css';
import '../../css/t/tzalnc8mr.css';
import '../../css/n/nunh1nbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="eovavrbyd"/><path class="beua1hduq"/><path class="tzalnc8mr"/><path class="nunh1nbfh"/></g>`,
		"fallback": "streamline-freehand-color:worldwide-web-sync",
	});
}

export default Component;
