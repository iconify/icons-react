import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0tc6jbsw.css';
import '../../css/f/f1o6q914t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0tc6jbsw wm-k"/><path class="f1o6q914t wm-s"/>`,
		"fallback": "withicons-bauhaus:zap-off",
	});
}

export default Component;
