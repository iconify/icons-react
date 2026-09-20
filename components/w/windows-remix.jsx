import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlwb603jh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qlwb603jh"/>`,
		"fallback": "streamline:windows-remix",
	});
}

export default Component;
