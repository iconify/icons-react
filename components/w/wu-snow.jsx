import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kln7xeb3o.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kln7xeb3o"/>`,
		"fallback": "wi:wu-snow",
	});
}

export default Component;
