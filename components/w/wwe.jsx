import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi-sd1bpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi-sd1bpb"/>`,
		"fallback": "thesvg-color:wwe",
	});
}

export default Component;
