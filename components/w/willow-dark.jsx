import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnykedbvb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnykedbvb"/>`,
		"fallback": "selfhst:willow-dark",
	});
}

export default Component;
