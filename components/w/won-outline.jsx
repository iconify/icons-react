import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j6kpieb4e.css';
import '../../css/x/xsr02kbke.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j6kpieb4e"/><path class="xsr02kbke"/></g>`,
		"fallback": "healthicons:won-outline",
	});
}

export default Component;
