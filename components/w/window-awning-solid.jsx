import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twu26sb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twu26sb2w"/>`,
		"fallback": "iconaut:window-awning-solid",
	});
}

export default Component;
