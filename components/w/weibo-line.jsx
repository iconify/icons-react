import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bli81z1tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bli81z1tr"/>`,
		"fallback": "ri:weibo-line",
	});
}

export default Component;
