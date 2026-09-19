import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm-tuvb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fm-tuvb1l"/>`,
		"fallback": "cbi:yeelight-cube2",
	});
}

export default Component;
