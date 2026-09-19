import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maq3uib2w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maq3uib2w"/>`,
		"fallback": "devicon:windows8-wordmark",
	});
}

export default Component;
