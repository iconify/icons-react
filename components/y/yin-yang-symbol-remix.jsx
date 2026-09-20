import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koyp5ltmq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="koyp5ltmq"/>`,
		"fallback": "streamline:yin-yang-symbol-remix",
	});
}

export default Component;
