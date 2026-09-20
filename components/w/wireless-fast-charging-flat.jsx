import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b3c1typdc.css';
import '../../css/n/n1rprs30s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b3c1typdc"/><path class="n1rprs30s"/></g>`,
		"fallback": "streamline-flex-color:wireless-fast-charging-flat",
	});
}

export default Component;
