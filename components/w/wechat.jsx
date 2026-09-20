import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwvg8jbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwvg8jbhn"/>`,
		"fallback": "thesvg:wechat",
	});
}

export default Component;
