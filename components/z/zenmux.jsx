import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b69reo12v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b69reo12v"/>`,
		"fallback": "thesvg-color:zenmux",
	});
}

export default Component;
