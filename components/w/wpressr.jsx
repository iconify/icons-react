import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj-clbd9z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj-clbd9z"/>`,
		"fallback": "la:wpressr",
	});
}

export default Component;
