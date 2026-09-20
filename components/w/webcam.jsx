import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xw8fpkimm.css';
import '../../css/b/bk8dcbcte.css';
import '../../css/s/svmnko8gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xw8fpkimm"/><path class="bk8dcbcte"/><path class="svmnko8gm"/></g>`,
		"fallback": "streamline-freehand-color:webcam",
	});
}

export default Component;
