import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic942e1qd.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic942e1qd"/>`,
		"fallback": "el:wordpress",
	});
}

export default Component;
