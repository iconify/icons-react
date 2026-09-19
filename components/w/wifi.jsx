import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn1kni4jm.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn1kni4jm"/>`,
		"fallback": "whh:wifi",
	});
}

export default Component;
