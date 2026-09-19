import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqjs2qjlu.css';
import '../../css/l/lsmjwzymg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqjs2qjlu"/><path class="lsmjwzymg"/>`,
		"fallback": "boxicons:window-arrow-in-filled",
	});
}

export default Component;
