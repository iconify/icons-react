import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya8ajib9q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ya8ajib9q"/>`,
		"fallback": "ix:wlan-strength-2-lock",
	});
}

export default Component;
