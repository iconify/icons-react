import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaqvbohxo.css';

const viewBox = {"width":88,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaqvbohxo"/>`,
		"fallback": "garden:wordmark-zendesk-26",
	});
}

export default Component;
