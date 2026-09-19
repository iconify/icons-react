import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgso-g05s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pgso-g05s"/>`,
		"fallback": "grommet-icons:wechat",
	});
}

export default Component;
