import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi7f8tu-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vi7f8tu-h"/>`,
		"fallback": "streamline-sharp:zip-file-solid",
	});
}

export default Component;
