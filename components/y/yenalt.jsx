import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgv83kgpw.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgv83kgpw"/>`,
		"fallback": "whh:yenalt",
	});
}

export default Component;
