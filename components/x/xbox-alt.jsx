import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uovhfdb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uovhfdb9u"/>`,
		"fallback": "cbi:xbox-alt",
	});
}

export default Component;
