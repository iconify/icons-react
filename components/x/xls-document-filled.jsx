import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je8ik9x9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="je8ik9x9h"/>`,
		"fallback": "ix:xls-document-filled",
	});
}

export default Component;
