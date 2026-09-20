import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iph2hoksm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iph2hoksm"/>`,
		"fallback": "si:widget-alt-1-line",
	});
}

export default Component;
