import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzf7p8kpr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzf7p8kpr"/>`,
		"fallback": "devicon-plain:web3js",
	});
}

export default Component;
