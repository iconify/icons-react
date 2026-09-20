import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zukfnb_jc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zukfnb_jc"/>`,
		"fallback": "streamline:zodiac-7",
	});
}

export default Component;
