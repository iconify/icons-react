import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcp-rbcvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcp-rbcvw"/>`,
		"fallback": "thesvg:wenxin",
	});
}

export default Component;
