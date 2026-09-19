import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu29ecc4k.css';

const viewBox = {"width":52,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu29ecc4k"/>`,
		"fallback": "garden:wordmark-capital-suite-26",
	});
}

export default Component;
