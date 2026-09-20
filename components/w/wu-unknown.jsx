import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa26vbb5i.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa26vbb5i"/>`,
		"fallback": "wi:wu-unknown",
	});
}

export default Component;
