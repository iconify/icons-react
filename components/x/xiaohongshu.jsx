import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4c-i6b6c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4c-i6b6c"/>`,
		"fallback": "dinkie-icons:xiaohongshu",
	});
}

export default Component;
