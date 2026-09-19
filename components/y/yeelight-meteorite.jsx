import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj2nb0bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj2nb0bor"/>`,
		"fallback": "cbi:yeelight-meteorite",
	});
}

export default Component;
