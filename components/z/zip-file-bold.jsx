import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj1cjk89h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jj1cjk89h"/>`,
		"fallback": "solar:zip-file-bold",
	});
}

export default Component;
