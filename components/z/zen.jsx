import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emfql_bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emfql_bba"/>`,
		"fallback": "cbi:zen",
	});
}

export default Component;
