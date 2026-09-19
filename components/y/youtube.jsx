import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edziozbwe.css';
import '../../css/x/xiw15t9pv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edziozbwe"/><path class="xiw15t9pv"/>`,
		"fallback": "circum:youtube",
	});
}

export default Component;
