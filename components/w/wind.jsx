import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq2tretia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq2tretia"/>`,
		"fallback": "uil:wind",
	});
}

export default Component;
