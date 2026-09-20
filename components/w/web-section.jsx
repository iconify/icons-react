import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcohcvn_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcohcvn_w"/>`,
		"fallback": "uit:web-section",
	});
}

export default Component;
