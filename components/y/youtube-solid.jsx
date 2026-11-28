import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhz3anl9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhz3anl9w"/>`,
		"fallback": "iconaut:youtube-solid",
	});
}

export default Component;
