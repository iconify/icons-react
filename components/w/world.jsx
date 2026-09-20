import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzjdr7-si.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzjdr7-si"/>`,
		"fallback": "typcn:world",
	});
}

export default Component;
