import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkj5r4bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkj5r4bqn"/>`,
		"fallback": "streamline-logos:yahoo-logo-block",
	});
}

export default Component;
