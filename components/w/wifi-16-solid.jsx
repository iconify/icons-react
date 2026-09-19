import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk3daea8a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yk3daea8a"/>`,
		"fallback": "heroicons:wifi-16-solid",
	});
}

export default Component;
