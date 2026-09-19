import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2_k3ejup.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2_k3ejup"/>`,
		"fallback": "f7:zoom-out",
	});
}

export default Component;
