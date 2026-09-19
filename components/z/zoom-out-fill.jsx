import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy398my-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uy398my-k"/>`,
		"fallback": "iconamoon:zoom-out-fill",
	});
}

export default Component;
