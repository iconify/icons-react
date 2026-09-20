import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs7zclvbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs7zclvbn"/>`,
		"fallback": "lineicons:xmark",
	});
}

export default Component;
