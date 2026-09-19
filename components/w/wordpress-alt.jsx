import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6qt5nqnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6qt5nqnv"/>`,
		"fallback": "fe:wordpress-alt",
	});
}

export default Component;
