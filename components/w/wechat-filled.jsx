import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e89cb6bcf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e89cb6bcf"/>`,
		"fallback": "dinkie-icons:wechat-filled",
	});
}

export default Component;
