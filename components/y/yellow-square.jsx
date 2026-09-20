import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csh1a7bzc.css';
import '../../css/t/tbzab391z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csh1a7bzc"/><path class="tbzab391z"/>`,
		"fallback": "openmoji:yellow-square",
	});
}

export default Component;
