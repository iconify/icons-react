import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z0gawebmo.css';
import '../../css/n/nnl4rjbje.css';
import '../../css/t/tb3-ubbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z0gawebmo"/><path class="nnl4rjbje"/><path class="tb3-ubbre"/></g>`,
		"fallback": "streamline-freehand:wifi-laptop",
	});
}

export default Component;
