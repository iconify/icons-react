import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p-y6d9-yq.css';
import '../../css/b/bdl02_i1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p-y6d9-yq"/><path class="bdl02_i1y"/></g>`,
		"fallback": "streamline-freehand:worldwide-web-network-www",
	});
}

export default Component;
