import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdyjhbc7j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vdyjhbc7j"/>`,
		"fallback": "heroicons-solid:wrench",
	});
}

export default Component;
