import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2mwuibgj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e2mwuibgj"/>`,
		"fallback": "gravity-ui:weight-hanging",
	});
}

export default Component;
