import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvi3ftn6l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hvi3ftn6l"/>`,
		"fallback": "healthicons:y-outline",
	});
}

export default Component;
