import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh2vkhb7e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh2vkhb7e"/>`,
		"fallback": "famicons:wine",
	});
}

export default Component;
