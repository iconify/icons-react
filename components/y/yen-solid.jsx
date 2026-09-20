import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plxt9oube.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plxt9oube"/>`,
		"fallback": "mynaui:yen-solid",
	});
}

export default Component;
