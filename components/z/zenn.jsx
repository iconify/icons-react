import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mej-j8b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mej-j8b2l"/>`,
		"fallback": "thesvg-color:zenn",
	});
}

export default Component;
