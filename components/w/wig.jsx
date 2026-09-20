import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6ucp-pam.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6ucp-pam"/>`,
		"fallback": "roentgen:wig",
	});
}

export default Component;
