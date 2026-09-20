import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv8r3jb8z.css';
import '../../css/m/m-whd2b6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv8r3jb8z"/><path clip-rule="evenodd" class="m-whd2b6c"/>`,
		"fallback": "si:widget-alt-1-fill",
	});
}

export default Component;
