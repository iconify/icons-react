import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsivexdcg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsivexdcg"/>`,
		"fallback": "dinkie-icons:zoom-in-filled",
	});
}

export default Component;
