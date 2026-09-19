import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyqkh4byn.css';

const viewBox = {"width":61,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyqkh4byn"/>`,
		"fallback": "garden:wordmark-reach-26",
	});
}

export default Component;
