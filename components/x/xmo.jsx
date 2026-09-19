import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soy094b6n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soy094b6n"/>`,
		"fallback": "cryptocurrency:xmo",
	});
}

export default Component;
