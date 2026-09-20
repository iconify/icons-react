import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nowzxjbvt.css';
import '../../css/z/z78wsfx6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nowzxjbvt"/><path class="z78wsfx6v"/></g>`,
		"fallback": "solar:xxx-outline",
	});
}

export default Component;
