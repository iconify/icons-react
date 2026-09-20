import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dotp4jdox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dotp4jdox"/>`,
		"fallback": "simple-icons:wikiquote",
	});
}

export default Component;
