import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im6fgsjxz.css';
import '../../css/x/xwibx1gek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im6fgsjxz"/><path class="xwibx1gek"/>`,
		"fallback": "boxicons:widget-small",
	});
}

export default Component;
