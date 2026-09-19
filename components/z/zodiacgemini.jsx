import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyvfo3bjr.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyvfo3bjr"/>`,
		"fallback": "whh:zodiacgemini",
	});
}

export default Component;
