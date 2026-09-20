import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2h3tpbhh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o2h3tpbhh"/>`,
		"fallback": "streamline-plump:web-remix",
	});
}

export default Component;
