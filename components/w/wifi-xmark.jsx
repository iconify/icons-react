import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k68g49b9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k68g49b9f"/>`,
		"fallback": "iconoir:wifi-xmark",
	});
}

export default Component;
