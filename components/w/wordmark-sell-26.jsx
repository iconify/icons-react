import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlfb33qbk.css';

const viewBox = {"width":33,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlfb33qbk"/>`,
		"fallback": "garden:wordmark-sell-26",
	});
}

export default Component;
