import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yawhug1ht.css';
import '../../css/f/fuv2pzbjk.css';
import '../../css/b/b2f0rdb6m.css';
import '../../css/y/yi8dv1b1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yawhug1ht"/><path class="fuv2pzbjk"/><path class="b2f0rdb6m"/><path class="yi8dv1b1n"/>`,
		"fallback": "solar:widget-bold",
	});
}

export default Component;
