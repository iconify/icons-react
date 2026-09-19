import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7cxk4byd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7cxk4byd"/>`,
		"fallback": "codicon:workspace-untrusted",
	});
}

export default Component;
