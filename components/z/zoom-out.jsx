import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwvsdd0eg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwvsdd0eg"/>`,
		"fallback": "codicon:zoom-out",
	});
}

export default Component;
