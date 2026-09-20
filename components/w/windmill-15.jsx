import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in4eu7odv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in4eu7odv"/>`,
		"fallback": "maki:windmill-15",
	});
}

export default Component;
