import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpf9e0yer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dpf9e0yer"/>`,
		"fallback": "si:youtube-fill",
	});
}

export default Component;
