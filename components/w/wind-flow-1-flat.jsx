import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t87qyshyx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t87qyshyx"/>`,
		"fallback": "streamline-color:wind-flow-1-flat",
	});
}

export default Component;
