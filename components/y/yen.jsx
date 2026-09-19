import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8d05wtmk.css';

const viewBox = {"width":18,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8d05wtmk"/>`,
		"fallback": "fontisto:yen",
	});
}

export default Component;
