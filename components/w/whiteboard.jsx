import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu32ykbtv.css';
import '../../css/a/aelxiub-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu32ykbtv"/><path class="aelxiub-n"/>`,
		"fallback": "boxicons:whiteboard",
	});
}

export default Component;
