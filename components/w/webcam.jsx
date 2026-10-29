import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-rrd8bym.css';
import '../../css/f/f3to3mb5j.css';
import '../../css/z/zr52crbkn.css';
import '../../css/q/qwe5pxb5r.css';
import '../../css/q/qkjcp453b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-rrd8bym wm-k"/><path class="f3to3mb5j wm-a"/><path class="wm-k zr52crbkn"/><path class="qwe5pxb5r wm-a"/><path class="qkjcp453b wm-a"/>`,
		"fallback": "withicons-bauhaus:webcam",
	});
}

export default Component;
