import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3w3uox9w.css';
import '../../css/j/j4n3fkkjr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s3w3uox9w"/><path class="j4n3fkkjr"/>`,
		"fallback": "selfhst:websocket",
	});
}

export default Component;
