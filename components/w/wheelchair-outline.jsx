import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy0eyp0kv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iy0eyp0kv"/>`,
		"fallback": "healthicons:wheelchair-outline",
	});
}

export default Component;
