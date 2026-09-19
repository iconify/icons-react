import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwt8ncc8u.css';

const viewBox = {"width":448,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwt8ncc8u"/>`,
		"fallback": "ps:xing",
	});
}

export default Component;
