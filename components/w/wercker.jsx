import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhul_5x-z.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhul_5x-z"/>`,
		"fallback": "file-icons:wercker",
	});
}

export default Component;
