import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v841rhb9t.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v841rhb9t"/>`,
		"fallback": "whh:z-upper-case",
	});
}

export default Component;
