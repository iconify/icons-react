import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz6-h_4-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz6-h_4-l"/>`,
		"fallback": "sidekickicons:wifi-slash",
	});
}

export default Component;
