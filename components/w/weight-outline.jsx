import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ikyxflbfk.css';
import '../../css/s/sc27pyorz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ikyxflbfk"/><path class="sc27pyorz"/></g>`,
		"fallback": "healthicons:weight-outline",
	});
}

export default Component;
