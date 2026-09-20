import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkh03vbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkh03vbmu"/>`,
		"fallback": "uis:web-section",
	});
}

export default Component;
