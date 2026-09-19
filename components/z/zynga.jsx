import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dobfjlbnc.css';

const viewBox = {"width":408,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dobfjlbnc"/>`,
		"fallback": "ps:zynga",
	});
}

export default Component;
