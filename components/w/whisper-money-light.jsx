import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv5k-0bpj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv5k-0bpj"/>`,
		"fallback": "selfhst:whisper-money-light",
	});
}

export default Component;
