import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocq-udwtp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocq-udwtp"/>`,
		"fallback": "file-icons:webhint",
	});
}

export default Component;
