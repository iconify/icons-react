import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alobnivwe.css';

const viewBox = {"width":1548,"height":786};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alobnivwe"/>`,
		"fallback": "thesvg-color:yapi-kredi-dark",
	});
}

export default Component;
