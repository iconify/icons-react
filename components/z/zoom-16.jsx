import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li43ywb3d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="li43ywb3d"/>`,
		"fallback": "qlementine-icons:zoom-16",
	});
}

export default Component;
