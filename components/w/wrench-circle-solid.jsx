import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vug-92bye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vug-92bye"/>`,
		"fallback": "streamline-plump:wrench-circle-solid",
	});
}

export default Component;
