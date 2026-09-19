import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdfo5r-_a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdfo5r-_a"/>`,
		"fallback": "devicon-plain:wolfram-wordmark",
	});
}

export default Component;
