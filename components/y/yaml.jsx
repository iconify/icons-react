import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rifvtfxit.css';

const viewBox = {"width":457,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rifvtfxit"/>`,
		"fallback": "file-icons:yaml",
	});
}

export default Component;
