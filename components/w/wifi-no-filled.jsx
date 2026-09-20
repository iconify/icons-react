import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4sop7z6r.css';
import '../../css/b/b5ugqsb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4sop7z6r"/><path class="b5ugqsb0g"/>`,
		"fallback": "tdesign:wifi-no-filled",
	});
}

export default Component;
