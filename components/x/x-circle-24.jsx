import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq_b-mhof.css';
import '../../css/z/zj49idy7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq_b-mhof"/><path class="zj49idy7n"/>`,
		"fallback": "octicon:x-circle-24",
	});
}

export default Component;
