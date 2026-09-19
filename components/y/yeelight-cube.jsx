import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn-9qwbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fn-9qwbly"/>`,
		"fallback": "cbi:yeelight-cube",
	});
}

export default Component;
