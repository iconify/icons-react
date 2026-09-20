import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gx3-ulb5j.css';
import '../../css/z/z20-tsb2r.css';
import '../../css/l/l9ep8wyys.css';
import '../../css/q/qtdy2f5jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gx3-ulb5j"/><path class="z20-tsb2r"/><path class="l9ep8wyys"/><path class="qtdy2f5jc"/></g>`,
		"fallback": "streamline-freehand-color:wifi-laptop",
	});
}

export default Component;
