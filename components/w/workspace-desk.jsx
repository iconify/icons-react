import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3y37rbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3y37rbbo"/>`,
		"fallback": "streamline-sharp:workspace-desk",
	});
}

export default Component;
