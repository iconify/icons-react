import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytyfycb1q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ytyfycb1q"/>`,
		"fallback": "streamline-plump:yin-yang-symbol-remix",
	});
}

export default Component;
