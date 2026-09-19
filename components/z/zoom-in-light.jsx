import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt0ma64ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt0ma64ka"/>`,
		"fallback": "iconamoon:zoom-in-light",
	});
}

export default Component;
