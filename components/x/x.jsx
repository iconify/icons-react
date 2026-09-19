import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frzcg76an.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="frzcg76an"/>`,
		"fallback": "healthicons:x",
	});
}

export default Component;
