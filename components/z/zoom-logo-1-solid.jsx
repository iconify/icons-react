import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b351edb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b351edb4g"/>`,
		"fallback": "streamline-logos:zoom-logo-1-solid",
	});
}

export default Component;
