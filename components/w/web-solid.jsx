import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwh57rb-p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uwh57rb-p"/>`,
		"fallback": "streamline:web-solid",
	});
}

export default Component;
