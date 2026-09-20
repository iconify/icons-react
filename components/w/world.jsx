import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1sj9daot.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1sj9daot"/>`,
		"fallback": "jam:world",
	});
}

export default Component;
