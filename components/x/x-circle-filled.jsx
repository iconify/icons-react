import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh3id2b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oh3id2b7n"/>`,
		"fallback": "reicon:x-circle-filled",
	});
}

export default Component;
