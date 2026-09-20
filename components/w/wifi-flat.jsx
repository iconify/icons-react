import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b_9nu-bdq.css';
import '../../css/h/h1h9desme.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b_9nu-bdq"/><path class="h1h9desme"/></g>`,
		"fallback": "streamline-color:wifi-flat",
	});
}

export default Component;
