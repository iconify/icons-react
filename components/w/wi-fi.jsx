import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etz4yobsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etz4yobsr"/>`,
		"fallback": "typcn:wi-fi",
	});
}

export default Component;
