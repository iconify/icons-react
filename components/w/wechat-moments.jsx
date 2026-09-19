import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr3a83odw.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr3a83odw"/>`,
		"fallback": "dinkie-icons:wechat-moments",
	});
}

export default Component;
