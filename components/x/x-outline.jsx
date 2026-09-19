import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg1pcqlsu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cg1pcqlsu"/>`,
		"fallback": "healthicons:x-outline",
	});
}

export default Component;
