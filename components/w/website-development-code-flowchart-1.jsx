import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wnxun4qvy.css';
import '../../css/e/egcjtp78a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wnxun4qvy"/><path class="egcjtp78a"/></g>`,
		"fallback": "streamline-freehand-color:website-development-code-flowchart-1",
	});
}

export default Component;
