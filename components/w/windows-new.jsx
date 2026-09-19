import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfh-c-blr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfh-c-blr"/>`,
		"fallback": "hugeicons:windows-new",
	});
}

export default Component;
