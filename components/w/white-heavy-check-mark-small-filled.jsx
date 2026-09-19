import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r60zgo13b.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r60zgo13b"/>`,
		"fallback": "dinkie-icons:white-heavy-check-mark-small-filled",
	});
}

export default Component;
