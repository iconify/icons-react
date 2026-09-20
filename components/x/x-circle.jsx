import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grp5ld88p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grp5ld88p"/>`,
		"fallback": "mynaui:x-circle",
	});
}

export default Component;
