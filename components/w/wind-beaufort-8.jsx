import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azb25zw4p.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azb25zw4p"/>`,
		"fallback": "wi:wind-beaufort-8",
	});
}

export default Component;
