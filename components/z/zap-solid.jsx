import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il7pfr43f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il7pfr43f"/>`,
		"fallback": "mynaui:zap-solid",
	});
}

export default Component;
