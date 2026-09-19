import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcup4z39m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mcup4z39m"/>`,
		"fallback": "healthicons:z",
	});
}

export default Component;
