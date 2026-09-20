import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4ma5v20c.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4ma5v20c"/>`,
		"fallback": "wi:wind-beaufort-6",
	});
}

export default Component;
