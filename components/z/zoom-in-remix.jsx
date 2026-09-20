import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibkd98bbo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ibkd98bbo"/>`,
		"fallback": "streamline-flex:zoom-in-remix",
	});
}

export default Component;
