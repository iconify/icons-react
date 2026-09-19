import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agtflua3y.css';
import '../../css/b/br29imbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agtflua3y"/><path class="br29imbac"/>`,
		"fallback": "boxicons:window-mac-alt",
	});
}

export default Component;
