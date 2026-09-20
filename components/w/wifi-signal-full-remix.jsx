import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emqywvbmj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="emqywvbmj"/>`,
		"fallback": "streamline:wifi-signal-full-remix",
	});
}

export default Component;
