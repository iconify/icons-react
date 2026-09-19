import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjeyw5bqd.css';

const viewBox = {"width":384,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjeyw5bqd"/>`,
		"fallback": "ps:youtube",
	});
}

export default Component;
