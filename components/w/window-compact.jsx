import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3jerqblc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3jerqblc"/>`,
		"fallback": "codicon:window-compact",
	});
}

export default Component;
