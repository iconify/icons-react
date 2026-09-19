import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyfb9dbjh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyfb9dbjh"/>`,
		"fallback": "dinkie-icons:white-medium-star-small",
	});
}

export default Component;
