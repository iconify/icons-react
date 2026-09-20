import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y46gdktui.css';
import '../../css/r/rqlsr2bvh.css';
import '../../css/f/fc2zsxbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="y46gdktui"/><path class="rqlsr2bvh"/><path class="fc2zsxbxd"/></g>`,
		"fallback": "streamline-freehand-color:wireless-signal-rss-feed",
	});
}

export default Component;
