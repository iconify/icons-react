import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmihfwbpp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmihfwbpp"/>`,
		"fallback": "devicon:windows11-wordmark",
	});
}

export default Component;
