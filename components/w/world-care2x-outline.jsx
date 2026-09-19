import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic208x0qi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ic208x0qi"/>`,
		"fallback": "healthicons:world-care2x-outline",
	});
}

export default Component;
