import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iedm-lb3z.css';

const viewBox = {"width":115,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iedm-lb3z"/>`,
		"fallback": "garden:wordmark-help-center-26",
	});
}

export default Component;
