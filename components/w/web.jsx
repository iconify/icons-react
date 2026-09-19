import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnv2_3btd.css';

const viewBox = {"width":717,"height":707};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnv2_3btd"/>`,
		"fallback": "ls:web",
	});
}

export default Component;
