import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoo8g9amd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yoo8g9amd"/>`,
		"fallback": "streamline-sharp:zoom-document-remix",
	});
}

export default Component;
