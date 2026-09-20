import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xq_ez15tr.css';
import '../../css/x/xrw5hkbia.css';
import '../../css/z/zra8kbb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xq_ez15tr"/><path class="xrw5hkbia"/><path class="zra8kbb3y"/></g>`,
		"fallback": "streamline-freehand-color:worldwide-web-network-www",
	});
}

export default Component;
