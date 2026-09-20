import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os7-1hbkc.css';

const viewBox = {"width":1548,"height":786};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os7-1hbkc"/>`,
		"fallback": "thesvg-color:yapi-kredi-light",
	});
}

export default Component;
