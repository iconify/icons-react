import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gafgfqgjb.css';
import '../../css/l/lnil9jecv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gafgfqgjb"/><path class="lnil9jecv"/>`,
		"fallback": "token:xsp",
	});
}

export default Component;
