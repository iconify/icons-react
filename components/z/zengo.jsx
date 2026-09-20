import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmb706_bp.css';
import '../../css/j/j3ziv3b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmb706_bp"/><path class="j3ziv3b8y"/>`,
		"fallback": "token:zengo",
	});
}

export default Component;
