import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g350h52iy.css';
import '../../css/n/nb8oicb8c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g350h52iy"/><path class="nb8oicb8c"/></g>`,
		"fallback": "streamline-flex-color:zip-folder-flat",
	});
}

export default Component;
