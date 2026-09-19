import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaqr3fw9n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaqr3fw9n"/>`,
		"fallback": "carbon:windy-dust",
	});
}

export default Component;
