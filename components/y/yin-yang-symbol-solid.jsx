import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pubfowbii.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pubfowbii"/>`,
		"fallback": "streamline-plump:yin-yang-symbol-solid",
	});
}

export default Component;
