import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8-yxwesq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b8-yxwesq"/>`,
		"fallback": "reicon:wheel2",
	});
}

export default Component;
