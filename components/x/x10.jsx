import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1exftzmm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1exftzmm"/>`,
		"fallback": "file-icons:x10",
	});
}

export default Component;
