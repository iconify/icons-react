import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/od9t7skbr.css';
import '../../css/g/gvyal6ejr.css';
import '../../css/g/gnu1hqb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="od9t7skbr"/><path class="gvyal6ejr"/><path class="gnu1hqb7m"/></g>`,
		"fallback": "streamline-freehand:website-development-browser-hand",
	});
}

export default Component;
