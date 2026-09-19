import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsr-b1yum.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gsr-b1yum"/>`,
		"fallback": "healthicons:wold-care-negative",
	});
}

export default Component;
