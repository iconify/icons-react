import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm83-l12l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm83-l12l"/>`,
		"fallback": "hugeicons:zap-off",
	});
}

export default Component;
