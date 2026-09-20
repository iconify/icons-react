import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm8umtxld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm8umtxld"/>`,
		"fallback": "simple-icons:xampp",
	});
}

export default Component;
