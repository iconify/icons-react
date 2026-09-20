import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez0hwtbxb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez0hwtbxb"/>`,
		"fallback": "selfhst:yamlresume-light",
	});
}

export default Component;
