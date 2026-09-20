import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvp5-2bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lvp5-2bby"/>`,
		"fallback": "thesvg:workersai-cloudflare",
	});
}

export default Component;
