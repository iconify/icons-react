import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9lrz3pno.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9lrz3pno"/>`,
		"fallback": "jam:yahoo",
	});
}

export default Component;
