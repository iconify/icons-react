import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytg06bcnj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytg06bcnj"/>`,
		"fallback": "uiw:zoom-out",
	});
}

export default Component;
