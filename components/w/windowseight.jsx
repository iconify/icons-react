import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpf2y9b7w.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpf2y9b7w"/>`,
		"fallback": "whh:windowseight",
	});
}

export default Component;
