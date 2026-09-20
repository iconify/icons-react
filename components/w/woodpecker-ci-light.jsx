import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxl7tlbnq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxl7tlbnq"/>`,
		"fallback": "selfhst:woodpecker-ci-light",
	});
}

export default Component;
