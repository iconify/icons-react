import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alm0-u9-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alm0-u9-r"/>`,
		"fallback": "file-icons:yamllint",
	});
}

export default Component;
