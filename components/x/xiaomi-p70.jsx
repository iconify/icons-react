import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih6dy_bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih6dy_bma"/>`,
		"fallback": "cbi:xiaomi-p70",
	});
}

export default Component;
