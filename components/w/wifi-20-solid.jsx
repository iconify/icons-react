import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq8b3yb3r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kq8b3yb3r"/>`,
		"fallback": "heroicons:wifi-20-solid",
	});
}

export default Component;
