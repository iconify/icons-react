import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr094tbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lr094tbyw"/>`,
		"fallback": "gg:youtube",
	});
}

export default Component;
