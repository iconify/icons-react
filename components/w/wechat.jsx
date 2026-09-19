import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeaypwb1l.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeaypwb1l"/>`,
		"fallback": "dinkie-icons:wechat",
	});
}

export default Component;
