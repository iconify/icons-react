import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfb62obzm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfb62obzm"/>`,
		"fallback": "devicon-plain:webstorm-wordmark",
	});
}

export default Component;
