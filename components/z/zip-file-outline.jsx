import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahocycbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ahocycbtl"/>`,
		"fallback": "solar:zip-file-outline",
	});
}

export default Component;
